import React from 'react'
import "./css/Footer.css"
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pages</h3>
          <Link to="/cultures" className='footer-nav'>Explore Cultures</Link>
          <Link to="/blog" className='footer-nav'>Blog</Link>
          <Link to="/community" className='footer-nav'>Community</Link>
          <Link to="/about" className='footer-nav'>About Us</Link>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : luciayen88@gmail.com</p>
          <p>Phone : +521 635455887</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
    <footer>
      <div className="wrapper">
        <div className="infos">
          <div>
            <h3>Pages</h3>
            <div className="pages">
              <Link className="link" to={"/cultures"}>
                Explore Cultures
              </Link>
              <Link className="link" to={"/blog"}>
                Blog
              </Link>
              <Link className="link" to={"/about"}>
                About
              </Link>
              <Link className="community" to={"/community/community.html"}>
                Community page
              </Link>
            </div>
          </div>
          <div>
            <h3>Contact us</h3>
            <div className="contact">
              <p>Email: luciayen88@gmail.com</p>
              <p>Tel: +237679048332</p>
            </div>
          </div>
          <div>
            <h3>Followe us</h3>
            <div className="socails">
              <FaFacebook className="fb" />
              <FaTwitter className="tw" />
              <FaInstagram className="ig" />
            </div>
          </div>
        </div>
        <div className="news-letter">
          <h2>Sign up for news letter</h2>
          <p>
            This helps use to send you the latast update on our cultures so that
            you don't miss any
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter your email here for update........"
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className='right'>
        <p >2024 Authemtic culture. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer