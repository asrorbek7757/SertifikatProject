import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'antd'; // Ant Design'ni import qilish
import { useTranslation } from 'react-i18next';
import "./History.css";

const PaginationGetUser = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://certificate1-397i.vercel.app/sertifikat/getSertificat');
      const items = response.data.innerData;
      setUsers(items);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsError(true);
      setErrorMessage(t('errorFetching'));
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://certificate1-397i.vercel.app/sertifikat/deleteSertifikat/${id}`);
      fetchData(); // O'chirilgandan so'ng yangilanish
    } catch (error) {
      console.error('Error deleting data:', error);
      setIsError(true);
      setErrorMessage(t('errorDeleting'));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  const columns = [
    {
      title: 'Ism',
      dataIndex: 'fname',
      key: 'fname',
    },
    {
      title: 'Familya',
      dataIndex: 'lname',
      key: 'lname',
    },
    {
      title: 'Markaz nomi',
      dataIndex: 'markazNomi',
      key: 'markazNomi',
    },
    {
      title: 'Fan nomi',
      dataIndex: 'fanNomi',
      key: 'fanNomi',
    },
    {
      title: 'Sana',
      dataIndex: 'date',
      key: 'date',
      render: (text) => formatDate(text),
    },
    {
      title: 'Amallar',
      key: 'actions',
      render: (_, record) => (
        <Button 
          className="delete-button"
          onClick={() => handleDelete(record._id)}
        >
          O'chirish
        </Button>
      ),
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">{t('certificateHistory')}</div>
      {isError && <p className="error-message">{errorMessage}</p>}
      <div className="table-container">
        <Table
          dataSource={users}
          columns={columns}
          scroll={{ x: 'max-content' }} // Gorizontal scroll qo'shish
          pagination={false} // Sahifalashni o'chirish (agar kerak bo'lsa)
        />
      </div>
      <Button 
        className="go-home-button"
        onClick={() => window.location.href = '/'} // Asosiy sahifaga o'tish
      >
        Asosiy sahifaga qaytish
      </Button>
    </div>
  );
};

export default PaginationGetUser;
