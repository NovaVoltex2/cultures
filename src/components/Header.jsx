/* header component */
import React, { useState } from 'react';
import '../components/css/header.css';
import AcLogo from './images/authenticCultureWhiteShort.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-resp">
        <div className="logo">
          <Link to="/">
            <img src={AcLogo} alt="" />
          </Link>
        </div>
        {/* Mobile menu icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className="fa fa-bars"></i>
        </div>
        </div>
        {/* Desktop navigation links */}
        <div className={`navbar-center ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/cultures" className="navbar-link">
            Explore Cultures
          </Link>
          <Link to="/blog" className="navbar-link">
            Blog
          </Link>
          <a href="/Community/community.html" className='navbar-a'>Community</a>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
