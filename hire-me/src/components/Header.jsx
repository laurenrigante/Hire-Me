import React from 'react';
import "../styling/Header.css"
import Navbar from './Navbar';
import  Notification from '../components/Notification';

/**
 * Functional component representing the header section of the website.
 * @returns {JSX.Element} - The JSX for the header component.
 */
const Header = () => {
  return (
    <header className="header" data-testid="header-id">
      <div className="header-left">
      
      </div>
      <div className="header-right">
       
              <div data-testid="notification-wrapper" className='notification-wrapper' >
                  <Notification/>
              </div>
        
    <div>
        <Navbar/>
        </div>
      </div>
    </header>
  );
};

export default Header;