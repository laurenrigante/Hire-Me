import NavbarCSS from "../styling/Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoutt from "../assets/log-out.png"; // Logout icon
import { FaSearch, FaBriefcase } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';

/**
 * Functional component representing the navigation bar.
 * @returns {JSX.Element} - The JSX for the navigation bar.
 */

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false); // State for managing dropdown menu visibility
  let menuRef = useRef(); // Ref for the menu for handling click outside to close the menu
  const toggleMenu = () => setOpen(!open); // Toggle the dropdown menu
  const [role, setRole] = useState('user'); // State for user's role
  //const [role, setRole] = useState('business'); // State for user's role

  const handleClickOutside = (e) => {
    // Close the dropdown menu if clicked outside
    if (
      !e.target.closest(`.${NavbarCSS.myBurger}`) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      <nav className={NavbarCSS.myNavbar} data-testid="navbar">
       
          <div ref={menuRef}>
            <div className={NavbarCSS.myMenuTrigger} onClick={toggleMenu} data-testid="user-pfp-container"> 
            <FaBars className={NavbarCSS.myBurger}  style={{width:"30px", height:"100px"}}/>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`${NavbarCSS.myDropdownMenu} ${
                open ? NavbarCSS.active : NavbarCSS.inactive
              }`}
              data-testid="dropdown"
            >
              {/* Greeting based on role */}
            
                <h3 className={NavbarCSS.h3}>
                  Hello Name! <br />
                </h3>
             

              {/* Dropdown Items */}
              <ul className={NavbarCSS.ul}>
                <DropdownItem
                  address={"/user-profile"}
                  icon={<CgProfile />}
                  text={"My Profile"}
                />
              
                {role === 'user' && (
                  <DropdownItem
                    address={"/MGMTDashboard"}
                    icon={<FaSearch />}
                    text={"Find a Freelancer"}
                  />
                )}
                {role === 'business' && (
                  <DropdownItem
                    address={"/myemployees"}
                    icon={<FaBriefcase />}
                    text={"My Business Page"}
                  />
                )}
              
                <LogoutBtn img={logoutt} />
              </ul>
            </div>
          </div>
      </nav>
    </>
  );

 /**
   * Functional component representing the logout button.
   * @returns {JSX.Element} - The JSX for the logout button.
   */
  function LogoutBtn() {
    return (
      <li className={NavbarCSS.myDropdownItem}>
        <button className={NavbarCSS.myLogout} onClick={logout}>
          <CiLogout /> Logout
        </button>
      </li>
    );
  }

  /**
   * Functional component representing a dropdown item.
   * @param {Object} props - The props object containing address, icon, and text.
   * @returns {JSX.Element} - The JSX for the dropdown item.
   */
  function DropdownItem(props) {
    return (
      <li className={NavbarCSS.myDropdownItem}>
        <a className={NavbarCSS.atag} href={props.address}>
          {props.icon} {props.text}
        </a>
      </li>
    );
  }
};


// PropTypes for type-checking props
Navbar.propTypes = {
  address: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};
export default Navbar;
