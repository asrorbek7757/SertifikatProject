import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectSubject.css'
const subjects = [
  'Matematika',
  'Fizika',
  'Kimyo',
  'Biologiya',
  'Ingliz tili'
];

const SelectSubject = ({ setSelectedSubject }) => {
  const navigate = useNavigate();

  const handleSelect = (subject) => {
    setSelectedSubject(subject); // Tanlangan fanni saqlash
    navigate('/sertifikat'); // Sertifikat yaratish sahifasiga o'tish
  };

  return (
    <div className="subject-selection">
      <h2>Fanni tanlang</h2>
      <div className="subjects">
      <br />
        {subjects.map((subject) => (
          <button key={subject} onClick={() => handleSelect(subject)}>
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectSubject;
