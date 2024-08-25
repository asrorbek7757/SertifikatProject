import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Biologiya.css';

const Biologiya = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedSubject('Biologiya');
    navigate('/sertifikat');
  };

  return (
    <div className="subject-selection biology-design">
      <button onClick={handleSelect}>
        Biologiya
      </button>
    </div>
  );
};

export default Biologiya;
