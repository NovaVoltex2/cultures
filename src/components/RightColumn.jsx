import React from 'react';
import MapImage from "./images/cameroon-administrative-map.jpg";
import ReunificationMonument from "./images/reunification.jpg";

function RightColumn() {
  return (
    <div className="rightcolumn">
      <div className="card">
        <h2>Our Map</h2>
        <img src={MapImage} alt="" width="200" />
        <p>Cameroon is a country in Central Africa on the Gulf of Guinea. The land has a total area of 475,440
          km² (183,568 mi²) and a total coastline of 402 km (249.8 mi).</p>
      </div>

      <div className="card">
        <h2>The Reunification Monument</h2>
        <img src={ReunificationMonument} alt="" width="200" />
        <p>Cameroon, Centre Region, Mfoundi Department, Yaounde, city center, Reunification Monument by
          architect Gedeon Mpando</p>
      </div>

      {/* Add more missing sections here */}
      {/* For example, add the missing "Popular Post" section with images */}
      <div className="card">
        <h3>Popular Post</h3>
        <div className="fakeimg">Image</div><br />
        <div className="fakeimg">Image</div><br />
        <div className="fakeimg">Image</div>
      </div>
    </div>
  );
}

export default RightColumn;
