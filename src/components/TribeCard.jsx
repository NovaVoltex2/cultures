import React from 'react';

const TribeCard = ({ tribe, onSelectTribe }) => {
  const handleSelect = () => {
    onSelectTribe(tribe);
  };

  return (
    <div className="tribe-card" onClick={handleSelect}>
      <h3>{tribe}</h3>
      
      {/* Add any additional information you want to display on the card */}
    </div>
  );
};

export default TribeCard;
