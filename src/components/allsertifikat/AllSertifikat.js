import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import axios from '../../api/index';
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode.react';
import './AllSertifikat.css';

const CreateCertificate = ({ selectedSubject }) => {
  const componentRef = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sertifikat/getSertificat');
      const items = response.data.innerData.reverse();
      setData(items[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsError(true);
      setErrorMessage('Ma\'lumotlarni olishda xatolik yuz berdi.');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  const handlePrint = async () => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage('');

    try {
      const input = componentRef.current;
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      const pdfOutput = pdf.output('blob');

      const formData = new FormData();
      formData.append('file', pdfOutput, 'certificate.pdf');

      const response = await axios.post('http://localhost:5000/upload', formData);

      if (response.status === 200) {
        alert('PDF muvaffaqiyatli yuborildi!');
      } else {
        throw new Error('Serverga yuborishda xatolik yuz berdi!');
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCertificateDesign = () => {
    switch (selectedSubject) {
      case 'Matematika':
        return 'mathematics-design'; // Matematika uchun dizayn
      case 'Fizika':
        return 'physics-design'; // Fizika uchun dizayn
      case 'Kimyo':
        return 'chemistry-design'; // Kimyo uchun dizayn
      case 'Biologiya':
        return 'biology-design'; // Biologiya uchun dizayn
      case 'Ingliz tili':
        return 'english-design'; // Ingliz tili uchun dizayn
      default:
        return 'default-design';
    }
  };

  return (
    <div className='bigdad'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={`box ${getCertificateDesign()}`} ref={componentRef}>
        {data ? (
          <div className="bola">
            <h1 className='logitiv'>CERTIFICATE</h1>
            <h3>{data.fname} {data.lname}</h3>
            <h3>{data.markazNomi} o'quv markazida</h3>
            <h3>{data.fanNomi} kursini</h3>
            <h3>muvaffaqiyatli tamomlagani uchun</h3>
            <h3>Ushbu sertifikat bilan taqdirlanadi</h3>
            <p>ID: {data.userId}</p>
            <h3>sana: {formatDate(data.date)}</h3>
            <p className='shuncakiImzo'>imzo:_______________________</p>

            <QRCode 
  value={`https://sertifikat-project.vercel.app`} 
  size={50} 
  className="qrcode" 
/>

          </div>
        ) : (
          <p style={{color:"black"}}>Ma'lumotlar yuklanmoqda...</p>
        )}
      </div>
      <br />
      <ReactToPrint
        trigger={() => <button disabled={isLoading}>{isLoading ? 'Yuklanmoqda...' : 'Sertifikatni yuklab yuborish'}</button>}
        content={() => componentRef.current}
        onAfterPrint={handlePrint}
      />
      <br />
      {isError && <p style={{ color: 'red' }}>Xatolik yuz berdi: {errorMessage}</p>}
    </div>
  );
};

export default CreateCertificate;
