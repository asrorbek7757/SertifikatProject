import React from 'react';
import { useNavigate } from 'react-router-dom';
import './It.css';

const It = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedSubject('IT');
    navigate('/sertifikat');
  };

  return (
    <div className="subject-selection it-design">
      <button onClick={handleSelect}>
        IT
      </button>
    </div>
  );
};

export default It;
