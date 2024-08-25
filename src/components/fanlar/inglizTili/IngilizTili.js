import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IngilizTili.css';

const InglizTili = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedSubject('Ingliz tili');
    navigate('/sertifikat');
  };

  return (
    <div className="subject-selection english-design">
      <button onClick={handleSelect}>
        Ingliz tili
      </button>
    </div>
  );
};

export default InglizTili;
