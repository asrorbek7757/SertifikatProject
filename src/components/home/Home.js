import React, { useState, useEffect } from 'react';
import { Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Home.css';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const userContent = (
    <div className="user-menu">
      <Button className="user-menu-btn"><a href="/register">Ro'yxatdan o'tish</a></Button>
      <br />
      <Button className="user-menu-btn"><a href="/login">Kirish</a></Button>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    setTimeout(() => {
      document.querySelector('.navbar').classList.add('visible');
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">CERTIFICATE</div>
        <div className="falling-leaves">
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          {/* Qo'shimcha barglar */}
        </div>
        <ul className="nav-links">
          {/* Qo'shimcha navigatsiya tugmalarini qo'shishingiz mumkin */}
        </ul>
        <Popover content={userContent} placement="bottomRight" trigger="click">
          <UserOutlined className="user-icon" />
        </Popover>
      </nav>

      <div className="hero">
        <p className="hero-description">Assalomu aleykum. SERTIFIKAT yaratish loyihasiga hush kelibsiz.!
          bu loyiha sizga tez va oson Sertifikat yaratish imkoniyatini beradi
        </p>
  

        <Button className="hero-button" onClick={showModal}>Boshlash</Button>
        <div className="service-item"><a href="/design">Sertifikat dizaylarini korish</a></div>
      </div>

      <div className="services">
        <div className="services-list">
          {/* Qo'shimcha xizmatlar */}
        </div>
      </div>
{/* 
      <div className="testimonials">
        <h2 className="testimonials-title">Foydalanuvchi sharhlari</h2>
        <div className="testimonial-item">"Bu sayt juda ajoyib! Sertifikatlarni osongina yaratdim."</div>
        <div className="testimonial-item">"Foydalanish oson va samarali!"</div>
      </div> */}

      {isModalVisible && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Qo'shimcha Ma'lumot</h2>
            <p>Bu dastur yordamida siz turli xil sertifikatlarni yaratishingiz va boshqarishingiz mumkin...</p>
            <p>Qo'shimcha imkoniyatlar:</p>
            <div>
              <div>1. Sertifikat dizaynini tanlash</div>
              <div>2. Sertifikatlarni PDF yordamida saqlash</div>
              <div>3. Sertifikatlarni chop etish</div>
            </div>
            <Button className="close-button"><a href="/register">Royhatdan otish</a></Button>
            <br />
            <Button onClick={handleClose} className="close-button">Yopish</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
