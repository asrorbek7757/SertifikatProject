import React, { useEffect, useState } from 'react';
import axios from '../../api/index';
import { useParams } from 'react-router-dom';

const CertificateDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://certificate1-397i.vercel.app/sertifikat/getSertificat/${userId}`);
        setData(response.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      {isError ? (
        <p>Xatolik yuz berdi.</p>
      ) : data ? (
        <table>
          <tbody>
            <tr>
              <td>Ism:</td>
              <td>{data.fname}</td>
            </tr>
            <tr>
              <td>Familiya:</td>
              <td>{data.lname}</td>
            </tr>
            <tr>
              <td>O'quv markazi:</td>
              <td>{data.markazNomi}</td>
            </tr>
            <tr>
              <td>Fan:</td>
              <td>{data.fanNomi}</td>
            </tr>
            <tr>
              <td>Sana:</td>
              <td>{new Date(data.date).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>ID:</td>
              <td>{data.userId}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Ma'lumot yuklanmoqda...</p>
      )}
    </div>
  );
};

export default CertificateDetails;
