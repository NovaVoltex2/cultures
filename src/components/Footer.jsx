import React from 'react'
import "./css/Footer.css"
import { Link } from 'react-router-dom';

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
          <p>Email : drepart@gmail.com</p>
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
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Authentic Culture. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer