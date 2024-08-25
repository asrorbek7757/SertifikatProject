import React, { useRef, useState, useEffect } from 'react';
import axios from '../../api/index';
import QRCode from 'qrcode.react';
import './SertificatPage.css';

const Print = () => {
    const componentRef = useRef(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/sertifikat/getSertificat');
            const items = response.data.innerData;

            console.log(response.data.innerData);
            if (Array.isArray(items) && items.length) {
                // Ma'lumotlarni sanaga ko'ra tartiblaymiz va eng so'nggisini tanlaymiz
                const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date));
                setData(sortedItems[0]);
            } else {
                console.error('Fetched data is not an array or is empty:', items);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('uz-UZ', options);
    };

    return (
        <div>
            <div className='box' ref={componentRef}>
                {data && (
                    <div className="bola">
                        <h1>C E R T I F I C A T E</h1>
                        <h3>{data.fname} {data.lname}</h3>
                        <h3>{data.markazNomi}da</h3>
                        <h3>{data.fanNomi} kursini</h3>
                        <h3>muvaffaqiyatli tamomlagani uchun</h3>
                        <h3>Ushbu sertifikat bilan taqdirlanadi</h3>
                        <p>ID: {data.userId}</p>
                        <h3>sana: {formatDate(data.date)}</h3>
                        <h3>_______________________</h3>
                        <QRCode value={`https://certificate-1.vercel.app/SertifikatPage`} size={70} className="qrcode" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Print;
