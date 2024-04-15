// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faComment } from '@fortawesome/free-solid-svg-icons';
import '../styling/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <Link to="/profile" className="footer-button">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
        <Link to="/" className="footer-button">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </Link>
        <Link to="/chat" className="footer-button">
          <FontAwesomeIcon icon={faComment} className="icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
