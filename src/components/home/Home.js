import React, { useState, useEffect } from 'react';
import { Button, Popover, Menu } from 'antd';
import { UserOutlined, LoginOutlined, HistoryOutlined, FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case 'register':
        navigate('/register');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'history':
        navigate('/history');
        break;
      case 'design':
        navigate('/design');
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const createLeaf = () => {
      const leaf = document.createElement('div');
      leaf.classList.add('leaf');
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDelay = `${Math.random() * 5}s`;
      document.querySelector('.fall-leaves').appendChild(leaf);

      setTimeout(() => {
        leaf.remove();
      }, 5000); // 5 sekunddan keyin bargni o‘chirish
    };

    const interval = setInterval(createLeaf, 500); // Har 0.5 sekundda yangi bargni yaratish

    return () => clearInterval(interval); // Component o'chirilganda intervalni to'xtatish
  }, []);
  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="register" icon={<UserOutlined />}>
        Ro'yxatdan o'tish
      </Menu.Item>
      <Menu.Item key="login" icon={<LoginOutlined />}>
        Kirish
      </Menu.Item>
      <Menu.Item key="history" icon={<HistoryOutlined />}>
        Tarixni ko'rish
      </Menu.Item>
      <Menu.Item key="design" icon={<FileTextOutlined />}>
        Sertifikat dizaynini ko'rish
      </Menu.Item>
    </Menu>
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
      <div className="fall-leaves"></div>
        <ul className="nav-links">
          {/* Qo'shimcha navigatsiya tugmalarini qo'shishingiz mumkin */}
        </ul>
        <Popover content={userMenu} placement="bottomRight" trigger="click">
          <UserOutlined className="user-icon" />
        </Popover>
      </nav>

      <div className="hero">
        <p className="hero-description">
          Assalomu aleykum. SERTIFIKAT yaratish loyihasiga hush kelibsiz.! Bu loyiha sizga tez va oson Sertifikat yaratish imkoniyatini beradi
        </p>
        <Button className="hero-button" onClick={showModal}>Boshlash</Button>
      </div>

      <div className="services">
        <div className="services-list">
          {/* Qo'shimcha xizmatlar */}
        </div>
      </div>

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




















































// // Home.jsx
// import React, { useState, useEffect } from 'react';
// import { Button, Popover, Select } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import './Home.css';

// const { Option } = Select;

// const translations = {
//   uz: {
//     welcome: "Assalomu aleykum. SERTIFIKAT yaratish loyihasiga hush kelibsiz.! Bu loyiha sizga tez va oson Sertifikat yaratish imkoniyatini beradi",
//     start: "Boshlash",
//     viewDesigns: "Sertifikat dizaylarini ko'rish",
//     extraInfo: "Qo'shimcha Ma'lumot",
//     modalContent: [
//       "Bu dastur yordamida siz turli xil sertifikatlarni yaratishingiz va boshqarishingiz mumkin...",
//       "Qo'shimcha imkoniyatlar:",
//       "1. Sertifikat dizaynini tanlash",
//       "2. Sertifikatlarni PDF yordamida saqlash",
//       "3. Sertifikatlarni chop etish",
//     ],
//     register: "Ro'yxatdan o'tish",
//     close: "Yopish",
//   },
//   en: {
//     welcome: "Welcome to the CERTIFICATE creation project! This project allows you to create certificates quickly and easily.",
//     start: "Start",
//     viewDesigns: "View Certificate Designs",
//     extraInfo: "Additional Information",
//     modalContent: [
//       "With this app, you can create and manage various certificates...",
//       "Additional features:",
//       "1. Choose a certificate design",
//       "2. Save certificates as PDF",
//       "3. Print certificates",
//     ],
//     register: "Register",
//     close: "Close",
//   },
// };

// function Home() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [language, setLanguage] = useState('uz'); // Til holati

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleClose = () => {
//     setIsModalVisible(false);
//   };

//   const handleLanguageChange = (value) => {
//     setLanguage(value);
//   };

//   const userContent = (
//     <div className="user-menu">
//       <a className='ahref' href="/register">{translations[language].register}</a>
//       <a className='ahref' href="/login">Login</a>
//       <a className='ahref' href="/history">View History</a>
//     </div>
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     setTimeout(() => {
//       document.querySelector('.navbar').classList.add('visible');
//     }, 100);

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="image">
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="logo">CERTIFICATE</div>
//         <div className="language-select">
//           <Select defaultValue="uz" onChange={handleLanguageChange}>
//             <Option value="uz">O'zbek</Option>
//             <Option value="en">English</Option>
//             {/* Qo'shimcha tillar */}
//           </Select>
//         </div>
//         <ul className="nav-links">
//           {/* Qo'shimcha navigatsiya tugmalarini qo'shishingiz mumkin */}
//         </ul>
//         <Popover content={userContent} placement="bottomRight" trigger="click">
//           <UserOutlined className="user-icon" />
//         </Popover>
//       </nav>

//       <div className="hero">
//         <p className="hero-description">{translations[language].welcome}</p>
//         <Button className="hero-button" onClick={showModal}>{translations[language].start}</Button>
//         <div className="service-item"><a href="/design">{translations[language].viewDesigns}</a></div>
//       </div>

//       <div className="services">
//         <div className="services-list">
//           {/* Qo'shimcha xizmatlar */}
//         </div>
//       </div>

//       {isModalVisible && (
//         <div className="custom-modal">
//           <div className="modal-content">
//             <h2>{translations[language].extraInfo}</h2>
//             <p>{translations[language].modalContent[0]}</p>
//             <p>{translations[language].modalContent[1]}</p>
//             <div>
//               <div>{translations[language].modalContent[2]}</div>
//               <div>{translations[language].modalContent[3]}</div>
//             </div>
//             <Button onClick={handleClose}>{translations[language].close}</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
