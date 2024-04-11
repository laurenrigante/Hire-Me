import React from "react";
import logo from "../assets/logo.png";

/**
 * Functional component representing the logo of the website.
 * @returns {JSX.Element} - The JSX for the logo component.
 */
const Logo = () => {
    const logoCss = {
        width: "120px", 
        height: "auto", 
        top: "10px", 
        left: "10px", 
      };
  return (
    <img
      src={logo}
      onClick={() => {
        window.location.href = "/";
      }}
      alt="HireMe"
      className="logo"
      style={logoCss}
    />
  );
};

export default Logo;