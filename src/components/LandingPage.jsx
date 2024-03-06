import React from "react";
import { Link } from "react-router-dom";
import "./css/landingpage.css";
import authCultureGray from "./images/authenticCultureDarkGray.png";
import ImageGrid from "./ImageGrid";
import CommunityImg from "./images/communityImg.jpg"


const LandingPage = () => {
  return (
    <div className="container">
      <div className="landing-page">
        <section className="about-section">
          <div>
            <h1>Welcome to Authentic Culture</h1>
            <p>
              We are here to provide you with insights about your origins and
              promote a strong cultural community. Our mission is to help you
              connect with your roots and understand your heritage better.
            </p>
          </div>
          <img
            src={authCultureGray} // Replace with your image URL
            alt="Authentic Culture"
            style={{ width: "200px", height: "auto" }}
          />
        </section>
        </div>
        
        <div className="cultureImgs">
        <ImageGrid/>
        </div>
        <div className="container">
        <section className="ytvids">
          <div>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/_YTXhIwuuOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/k5XC8kB-3a4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>

        <section className="blog-section">
          <h3>Latest Blog Posts</h3>
          {/* Add your blog posts here */}
          <Link to="/blog">
            <div className="blog-post">
              <h4>Korup National Park</h4>
              <p>
                Korup National Park is one of Cameroon's rainforest protected
                areas gazetted in October 1986 by Presidential Decree N° 86/1283
                of 30th October 1986.
              </p>
            </div>
          </Link>
          <Link to="/blog">
            <div className="blog-post">
              <h4>Kribi</h4>
              <p>
                Kribi is a beach resort and sea port in Cameroon. Kribi beach,
                2006. Kribi is located in Cameroon. Kribi. Location in Cameroon{" "}
              </p>
            </div>
          </Link>
          {/* Add more blog posts as needed */}
        </section>

        <section className="community-section">
          <h3>Join Our<br/> Community</h3>
          <p>
            Connect with people who share the same cultural background as you.
            Our community is a safe space to engage in discussions, share
            stories, and celebrate diversity. <br />
            <br />
            <Link to="/community">
              <button>Join Now</button>
            </Link>
          </p>

          <img
            src={CommunityImg} // Replace with your image URL
            alt="Community"
          />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
