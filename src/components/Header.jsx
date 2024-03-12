/* header component */
import React, { useState } from 'react';
import '../components/css/header.css';
import AcLogo from './images/authenticCultureWhiteShort.png';
import { Link } from 'react-router-dom';
const Header = () => {
  // state if the menu is open or not
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="header">
      <nav>
        {/* logo */}
        <div className="logo">
          <Link to={"/"}>
            <img src={AcLogo} alt="" />
          </Link>
        </div>
        {/* links */}
        <div className="links">
          <Link className="link" to={"/cultures"}>
            Explore Cultures
          </Link>
          <Link className="link" to={"/blog"}>
            Blog
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
        </div>
        {/* community button */}
        <Link className="community" to={"/community/community.html"}>
          Community page
        </Link>
        {/* mobile menu */}
        <div
          className="mobile"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="menu-icons">
            <div className={isOpen ? "first" : ``}></div>
            <div className={isOpen ? "second" : ``}></div>
            <div className={isOpen ? "third" : ``}></div>
          </div>
          {/* links */}
          <div className={isOpen ? "mobile-links" : "mobile-links2"}>
            <div className="mobile-links-div">
              <Link className="link" to={"/cultures"}>
                Explore Cultures
              </Link>
              <Link className="link" to={"/blog"}>
                Blog
              </Link>
              <Link className="link" to={"/about"}>
                About
              </Link>
              {/* community button */}
              <Link
                className="community-mobile"
                to={"/community/community.html"}
              >
                Community page
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
