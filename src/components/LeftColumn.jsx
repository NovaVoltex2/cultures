import React from 'react';
import Bayangi from "./images/bayangi.jpg"
import Bamilike from "./images/bamileke.jpg"
import Bamenda from "./images/bamenda.jpg"
import Kurop from "./images/kurop.jpg"
import MtCameroon from "./images/Mount_Cameroon_view_from_Buea_(Soppo).jpg"
import Kribi from "./images/kribi(1).jpg"



function LeftColumn() {
    return (
        <div className="leftcolumn">
          <div className="card">
            <h2>Our Brief History</h2>
            <div className="fakeimg" style={{ height: 'auto' }}>
              <p> The name Cameroon is derived from the Portuguese word, Camaroes, meaning shrimps. As
                Portuguese sailor Ferdanando Poo arrived in 1472 at the Wouri river in Douala and discovered
                so many shrimps in the river he decided to call it Rio Dos Camaroes (River of shrimps, in
                Portuguese)</p>
              <p> He was the first Europeans to arrive the coast of Cameroon. They reached Douala through the
                Wouri River. They named it “Rio dos Camarões (the
                River of Prawns), which later resulted in the name of the country.</p>
            </div>
            <p id='toLearnMore'>To learn more, click below!!!</p>
            <button><a href="https://www.everyculture.com/Bo-Co/Cameroon.html" target='_blank'>Click Here</a></button>
          </div>
    
          <div className="card">
            <div id="card">
              <h2>Traditional Clothing</h2>
              <h5>Since our country Cameroon has an extraordinary mixture of populations with more than 240
                tribes, we have different dresses for special occasions and they actually vary from one tribe
                or ethnic group to another</h5>
              <div className="blog-content">
                <div className="box">
                  <img src={Bayangi} alt="" height="200" width="200" />
                  <h2>The KABA</h2>
                  <p>The dish originates from the North West Region and has been adopted by the people of the
                    West Region. In the West, the Bamileke people have made this dish a traditional meal.
                  </p>
                </div>
                <div className="box">
                  <img src={Bamilike} alt="" width="200" height="200" />
                  <h2>NDOP DANCHIKIRI</h2>
                  <p>Bamileke Men Attire the Ndop Danchikiri it is made up of the original Ndop materials
                    called Velo, and carefully embroiled by a specialist. The Danchikiri is mostly used by
                    the elderly and twins who carry along items like Drinking Horn, cup, and traditional herbs in
                    a handbag.</p>
                </div>
                <div className="box">
                  <img src={Bamenda} alt="" width="200" height="200" />
                  <h2>Dangchikier</h2>
                  <p>Latest Bamenda traditional wear (Ddangchikiri) is an Authentic handmade embroiled toghu sleeveless vest. Toghu fabric is a distinct fabric from the north-west region of Cameroon and is one of Cameroon's most popular regalia.
                  </p>
                </div>
              </div>
              <p>To learn more, click below!!!</p>
              <button><a href="#">Click Here</a></button>
            </div>
          </div>
    
          <div className="card">
            <div id="card">
              <h2>Touristic Attraction</h2>
              <h5>In our country, we have a wide variety of topographics, animals, and tree species, for that
                reason, it is called <b>Africa Inmunature</b></h5>
              <div className="blog-content">
                <div className="box">
                  <img src={Kurop} alt="" width="200" height="200" />
                  <h2>Korup National Park
                  </h2>
                  <p>Korup National Park is one of Cameroon's rainforest protected areas gazetted in October
                    1986 by Presidential Decree N° 86/1283 of 30th October 1986.</p>
                </div>
                <div className="box">
                  <img src={MtCameroon} alt="" width="200" height="200" />
                  <h2>Mount Cameroon also called Mount Fako</h2>
                  <p>Mount Cameroon is an active volcano in the South West region of Cameroon next to the city
                    of Buea near the Gulf of Guinea. Mount Cameroon is also known as Cameroon Mountain or
                    Fako or by its indigenous name Mongo ma Ndemi</p>
                </div>
                <div className="box">
                  <img src={Kribi} alt="" width="200" height="200" />
                  <h2>Kribi</h2>
                  <p>Kribi is a beach resort and sea port in Cameroon. Kribi beach, 2006. Kribi is
                    located in Cameroon. Kribi. Location in Cameroon </p>
                </div>
              </div>
              <p>To learn more, click below!!!</p>
              <button><a href="#">Click Here</a></button>
            </div>
          </div>
    
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Our country Cameroon is blessed</h5>
            <div className="fakeimg" style={{ height: '200px' }}>Image</div>
            <p>Some text..</p>
          </div>
        </div>
      );
}

export default LeftColumn;
