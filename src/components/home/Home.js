import React, { useState, useEffect } from 'react';
import { Modal, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Home.css';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <Button className="user-menu-btn"><a href="/register">Ro'yxatdan o'tish</a></Button>
      <Button className="user-menu-btn"><a href="/login">Kirish</a></Button>
    </div>
  );

  useEffect(() => {
    // Sahifa scroll holatini kuzatish
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Sahifa yuklanganda navbarni ko‘rsatish
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
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">CERTIFICATE</div>
        <div class="falling-leaves">
        <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div>
    <div class="leaf"></div></div> {/*<!-- Kuzgi barglar uchun element -->*/}
        <ul className="nav-links">
          {/* Qo'shimcha navigatsiya tugmalarini qo'shishingiz mumkin */}
        </ul>
        <Popover content={userContent} placement="bottomRight" trigger="click">
          <UserOutlined className="user-icon" />
        </Popover>
      </nav>

      {/* Qahramon sektsiyasi */}
      <div className="hero">
        {/* <h1 className="hero-title">Eng sifatli sertifikatlarni yarating</h1> */}
        <br />
        <br />
        <br />
        <p className="hero-description">Oson va tez sertifikat yaratish xizmati.</p>
        <Button className="hero-button" onClick={showModal}>Boshla</Button>
      </div>

      {/* Xizmatlar sektsiyasi */}
      <div className="services">
        <h2 className="services-title">Xizmatlarimiz</h2>
        <div className="services-list">
          <div className="service-item">Sertifikat dizaynini tanlash</div>
          <div className="service-item">Sertifikatlarni PDF ko'rinishida saqlash</div>
          <div className="service-item">Sertifikatlarni chop etish</div>
        </div>
      </div>

      {/* Foydalanuvchi sharhlari */}
      <div className="testimonials">
        <h2 className="testimonials-title">Foydalanuvchi sharhlari</h2>
        <div className="testimonial-item">"Bu sayt juda ajoyib! Sertifikatlarni osongina yaratdim."</div>
        <div className="testimonial-item">"Foydalanish oson va samarali!"</div>
      </div>

      {/* Modal */}
      <Modal title="Qo'shimcha Ma'lumot" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Bu dastur yordamida siz turli xil sertifikatlarni yaratishingiz va boshqarishingiz mumkin...</p>
        <p>Qo'shimcha imkoniyatlar:</p>
        <div>
          <div>Sertifikat dizaynini tanlash</div>
          <div>Sertifikatlarni PDF yordamida saqlash</div>
          <div>Sertifikatlarni chop etish</div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
