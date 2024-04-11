import React from 'react';
import "../styling/Header.css"
import Navbar from './Navbar';
import Logo from '../components/Logo';

/**
 * Functional component representing the header section of the website.
 * @returns {JSX.Element} - The JSX for the header component.
 */
const Header = () => {
  return (
    <header className="header" data-testid="header-id">
      <div className="header-left">
        <Logo />
      </div>
      <div className="header-right">
       
        
    <div>
        <Navbar/>
        </div>
      </div>
    </header>
  );
};

export default Header;