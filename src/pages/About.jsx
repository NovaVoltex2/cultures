import "./css/About.css";
import Pic1 from "../components/images/aboutImgs/pic-1.jpg";
import Pic2 from "../components/images/aboutImgs/pic-2.jpg";
import Pic3 from "../components/images/aboutImgs/pic-3.jpg";
import Pic5 from "../components/images/aboutImgs/pic-5.jpg";
import Pic4 from "../components/images/aboutImgs/pic-4.jpg";
import Pic from "../components/images/aboutImgs/pic.jpg";

const About = () => {
  return (
    <>
      <div class="about-container">
        <div class="row">
          <h1>AUTHENTIC CULTURE</h1>
          <p>
            Welcome to our website dedicated to showcasing the beauty and
            richness of different cultures from around the world. Our mission is
            to provide a platform for authentic cultural experiences and to
            foster a deeper understanding and appreciation for the diversity
            that makes our world so unique. We believe that by sharing stories,
            traditions, and customs from different cultures, we can break down
            barriers and create a more tolerant and inclusive society. Our team
            is made up of passionate individuals who are committed to promoting
            cultural awareness and celebrating the many ways in which our
            differences enrich our lives. We hope that you enjoy exploring our
            website and learning about the amazing cultures that make up our
            world.
          </p>
        </div>
      </div>
      <div class="hero">
        <div class="paragraphs"></div>
      </div>

      <header>
        <div class="slide-container">
          <h3 className="our-team">OUR TEAM</h3>
          <div class="slide-content">
            <div class="card-wrapper">
              <div class="about-card">
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic5} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4>SUPERVISOR</h4>
                    <h2 class="name">MBUR TERRENCE </h2>
                    <p class="description">
                      652251615 <br /> mburterencelufung@gmail.com
                    </p>
                  </div>
                </div>
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic3} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">LEINYUY PARTEMUS</h2>
                    <p class="description">
                      652962340 <br /> leinyuypartemus2002@gmail.com
                    </p>
                  </div>
                </div>
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic1} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">WANCHI LUCIA YEN</h2>
                    <p class="description">
                      679048332 <br /> luciayen88@gmail.com
                    </p>
                  </div>
                </div>
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic4} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">NDALEH KONGNE NDALEH</h2>
                    <p class="description">
                      671846770 <br /> ndalehkongne301@gmail.com
                    </p>
                  </div>
                </div>
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">DASSI SOH FORTUNE</h2>
                    <p class="description">
                      671104384 <br /> dassisohfortune@gmail.com
                    </p>
                  </div>
                </div>
                <div class="swiper">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={Pic2} alt="team" class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h2 class="name">NKAMBI JULIUS</h2>
                    <p class="description">
                      671770232 <br /> nkambijuliusforsuh@gmail.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
