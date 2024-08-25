import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Kimyo.css';

const Kimyo = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedSubject('Kimyo');
    navigate('/sertifikat');
  };

  return (
    <div className="subject-selection chemistry-design">
      <button onClick={handleSelect}>
        Kimyo
      </button>
    </div>
  );
};

export default Kimyo;
