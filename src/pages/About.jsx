import "./css/About.css";
import Pic1 from "../components/images/aboutImgs/pic-1.jpg";
import Pic2 from "../components/images/aboutImgs/pic-5.jpg";
import Pic3 from "../components/images/aboutImgs/pic-4.jpg";
import Pic4 from "../components/images/aboutImgs/elvis.jpg";

const About = () => {

  // 679048332 <br /> luciayen88@gmail.com WANCHI LUCIA YEN
  // 652251615 <br /> mburterencelufung@gmail.com MBUR TERRENCE
  // 671846770 <br /> ndalehkongne301@gmail.com NDALEH KONGNE NDALEH
  return (
    <di className="about-section">
      <div className="about">
        <h2>About Authentic Culture and their Developers</h2>
        <div className="developer-text">
          <div className="developers">
            {/* first developers */}
            <div className="first-group">
              <div>
                {/* <img src={Pic1} alt="" /> */}
              </div>
              <div>
                {/* <img src={Pic2} alt="" /> */}
              </div>
            </div>
            {/* second developers */}
            <div className="second-group">
              <div>
                {/* <img src={Pic3} alt="" /> */}
              </div>
              <div>
                {/* <img src={Pic4} alt="" /> */}
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>About Authentic Culture</h3>
            <p>
              Welcome to our website dedicated to showcasing the beauty and
              richness of different cultures from around the world. Our mission
              is to provide a platform for authentic cultural experiences and to
              foster a deeper understanding and appreciation for the diversity
              that makes our world so unique. We believe that by sharing
              stories, traditions, and customs from different cultures, we can
              break down barriers and create a more tolerant and inclusive
              society. Our team is made up of passionate individuals who are
              committed to promoting cultural awareness and celebrating the many
              ways in which our differences enrich our lives. We hope that you
              enjoy exploring our website and learning about the amazing
              cultures that make up our world.
            </p>
          </div>
        </div>
      </div>
    </di>
  );
};

export default About;
