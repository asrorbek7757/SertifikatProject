import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Sertifikat from './components/sertifikat/Sertifikat';
import Home from './components/home/Home';
import AllSertifikat from './components/allsertifikat/AllSertifikat';
import SertifikatPage from './components/sertifikatPage/SertificatPage';
import SelectSubject from './components/selectSubject/SelectSubject';
import Design from './components/sertifikatDesign/Design';
import History from './components/history/History';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';


function App() {
  const [selectedSubject, setSelectedSubject] = useState(''); // State yaratildi

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="sertifikat" element={<Sertifikat />} />
        <Route path="SertifikatPage" element={<SertifikatPage />} />
        <Route path="SelectSubject" element={<SelectSubject setSelectedSubject={setSelectedSubject} />} />
        <Route path="AllSertifikat" element={<AllSertifikat selectedSubject={selectedSubject} />} />
        <Route path="design" element={<Design />} />
        <Route path="history" element={<History />} />
        <Route path="language" element={<LanguageSwitcher />} />
      </Routes>
    </div>
  );
}

export default App;
