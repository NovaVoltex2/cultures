import React from 'react';
import { useParams } from 'react-router-dom';
import Content from '../components/Content';



const SelectedTribeContent = () => {
  const { tribe } = useParams();

  return <Content selectedTribe={tribe} />;
};

export default SelectedTribeContent;
