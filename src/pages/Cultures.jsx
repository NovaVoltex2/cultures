import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TribeCard from '../components/TribeCard';
import Content from '../components/Content';
import './css/cultures.css';

const Cultures = () => {
  const [selectedTribe, setSelectedTribe] = useState(null);
  const tribes = ['Nso', 'Bakweri', 'Bakossi', 'Bamilike']; // Add your list of tribes here
  const navigate = useNavigate();

  const handleSelectTribe = (tribe) => {
    setSelectedTribe(tribe);
    // Update the URL when a tribe is selected
    navigate(`/cultures/${tribe}`);
  };

  return (
    <div className="container-culture">
      {selectedTribe ? (
        <>
          <Content selectedTribe={selectedTribe} />
        </>
      ) : (
        <div className="tribe-cards">
          {tribes.map((tribe) => (
            <TribeCard key={tribe} tribe={tribe} onSelectTribe={handleSelectTribe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cultures;
