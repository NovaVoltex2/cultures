import React, { useState } from 'react';
import OverviewNso from './Nso/OverviewNso';
import OverviewBakweri from './Bakweri/OverviewBakweri';
import AttireBakweri from './Bakweri/AttireBakweri';
import CuisineBakweri from './Bakweri/CuisineBakweri';
import FestivalsBakweri from './Bakweri/FestivalsBakweri';
import LanguageBakweri from './Bakweri/LanguageBakweri';

const Content = ({ selectedTribe }) => {
  // Create a mapping of content based on the selected tribe and topic
  const contentMap = {
    'Nso': {
      Overview: <OverviewNso/>,
      'Traditional Attire' : 'Attire content for Nso',
      'Traditional Cuisine': 'Cuisine content for Nso',
      'Festivals And Celeberations': 'Festivals and Celebrations for Nso',
      'Language and Communication':'Language and Communication for Nso',
      'Arts and Crafts':'Arts and Craft content for Nso',
    },
    'Bakweri': {
      Overview: <OverviewBakweri/>,
      'Traditional Attire' : <AttireBakweri/>,
      'Traditional Cuisine': <CuisineBakweri/>,
      'Festivals And Celeberations': <FestivalsBakweri/>,
      'Language and Communication':<LanguageBakweri/>,
      'Arts and Crafts':'Arts and Craft content for Bakweri',
    },
    'Bakossi': {
      Overview: 'Overview content for Bakossi',
      'Traditional Attire' : 'Attire content for Bakossi',
      'Traditional Cuisine': 'Cuisine content for Bakossi',
      'Festivals And Celeberations': 'Festivals and Celebrations for Bakossi',
      'Language and Communication':'Language and Communication for Bakossi',
      'Arts and Crafts':'Arts and Craft content for Bakossi',
    },
    'Bamilike': {
      Overview: 'Overview content for Bamilike',
      'Traditional Attire' : 'Attire content for Bamilike',
      'Traditional Cuisine': 'Cuisine content for Bamilike',
      'Festivals And Celeberations': 'Festivals and Celebrations for Bamilike',
      'Language and Communication':'Language and Communication for Bamilike',
      'Arts and Craft':'Arts and Craft content for Bamilike',
    },
    // Add more tribes and their respective content here
  };

  const [selectedTopic, setSelectedTopic] = useState('Overview'); // Default to 'A' topic

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="content">
      
      <div className="sidebar">
      <h2>{selectedTribe}</h2>
        <ul>
          <li onClick={() => handleSelectTopic('Overview')} className={selectedTopic === 'Overview' ? 'active' : ''}>
            Overview
          </li>
          <li onClick={() => handleSelectTopic('Traditional Attire')} className={selectedTopic === 'Traditional Attire' ? 'active' : ''}>
            Traditional Attire
          </li>
          <li onClick={() => handleSelectTopic('Traditional Cuisine')} className={selectedTopic === 'Traditional Cuisine' ? 'active' : ''}>
            Traditional Cuisine
          </li>
          <li onClick={() => handleSelectTopic('Festivals And Celeberations')} className={selectedTopic === 'Festivals And Celeberations' ? 'active' : ''}>
            Festivals and Celeberations
          </li>
          <li onClick={() => handleSelectTopic('Language and Communication')} className={selectedTopic === 'Language and Communication' ? 'active' : ''}>
            Language and Communication
          </li>
          <li onClick={() => handleSelectTopic('Arts and Crafts')} className={selectedTopic === 'Arts and Crafts' ? 'active' : ''}>
            Arts and Crafts
          </li>
          {/* Add more topics to the sidebar as needed */}
        </ul>
      </div>
      <div className="topic-content">
        <h3>{selectedTopic}</h3>
        <div className='topic-content-firt-p'>{typeof contentMap[selectedTribe]?.[selectedTopic] === 'string' ? (
  <p>{contentMap[selectedTribe]?.[selectedTopic]}</p>
) : (
  contentMap[selectedTribe]?.[selectedTopic]
)}</div>

      </div>
    </div>
  );
};

export default Content;
