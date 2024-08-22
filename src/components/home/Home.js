import React, { useState } from 'react';
import { Modal, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Home.css';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const userContent = (
    <div className="user-menu">
      <Button className="user-menu-btn"><a href="/register">Register</a></Button>
      <Button className="user-menu-btn"><a href="/login">Login</a></Button>
    </div>
  );

  return (
    <div className='image'>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"> C E R T I F I C A T E </div>
        <ul className="nav-links">
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
        </ul>
        <Popover content={userContent} placement="bottomRight" trigger="click">
          <UserOutlined className="user-icon" />
        </Popover>
      </nav>

      <div className="ota">
        <h3>
          Sertifikat yaratish veb dasturiga xush kelibsiz!
          <span onClick={showModal} style={{ cursor: 'pointer', marginLeft: '10px' }}>...</span>
        </h3>
        
       
      </div>

      <Modal title="Qo'shimcha Ma'lumot" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Bu dastur yordamida siz turli xil sertifikatlarni yaratishingiz va boshqarishingiz mumkin...</p>
        <p>Qo'shimcha imkoniyatlar:</p>
        <ul>
          <li>Sertifikat dizaynini tanlash</li>
          <li>Sertifikatlarni PDF yordamida saqlash</li>
          <li>Sertifikatlarni chop etish</li>
        </ul>
      </Modal>
    </div>
  );
}

export default Home;
