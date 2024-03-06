
import React from 'react';
import './css/ImageGrid.css'; 
import Ngonso from "./images/landingpageImgs/ngonso.jpg"
import Fon from "./images/landingpageImgs/fon1.jpg"
import Toghu1 from "./images/landingpageImgs/toghu1.jpg"
import Foumban from "./images/landingpageImgs/foumbanMus.jpg"




const ImageGrid = () => {
  const images = [
    {
      src: Ngonso,
      title: 'Ngonso',
    },
    {
      src: Fon,
      title: 'Nso Masquerade',
    },
    {
      src: Toghu1,
      title: 'Toghu',
    },
    {
      src: Foumban,
      title: 'Foumban Museum',

    },
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={`Image ${index + 1}`} />
          <div className="image-title-overlay">{image.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
