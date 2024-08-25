import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Matematika.css';

const Matematika = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedSubject('Matematika');
    navigate('/sertifikat');
  };

  return (
    <div className="subject-selection mathematics-design">
      <button onClick={handleSelect}>
        Matematika
      </button>
    </div>
  );
};

export default Matematika;
