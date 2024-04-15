import React from "react";
import PropTypes from "prop-types";
import "../styling/BusinessComponent.css";
import { useNavigate } from "react-router-dom";
import "../styling/StarRating.css"; // Import CSS file for styling

const BusinessComponent = ({ businessData }) => {
  const navigate = useNavigate();

  // Destructuring the businessData object to extract the properties
  const {
    businessName,
    freelanceType,
    picture,
    phoneNumber,
    email,
    businessId,
    rating,
    Address,
  } = businessData;

  return (
    <div className="condo-details-container">
      <div className="condo-info">
        <div className="condo-name-user-tag">
          <h2 style={{color:"#5f43b2"}}>{businessName}</h2>
          <button
            className={`filter-button-${freelanceType.toLowerCase()} label`}
            
          >
            {freelanceType}
          </button>
        </div>
        <div className="image-and-info">
          <img src={picture} alt="Profile" className="profile-picture" />
          <div>
            {email}
            <br></br>
            {phoneNumber}
            <br></br>
            {Address}
          </div>
        </div>
        <div className="rating-buttons">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => {
              return (
                <span key={i} className={i < rating ? "icon filled" : "icon"}>
                  ★
                </span>
              );
            })}
          </div>
          <div className="button-group" style={{paddingTop:"15px"}}>
            <button
              className="details-button" 
              onClick={() => navigate(`/freelancer/${businessId}`)}
              style={{fontSize:"16px",width:"80px" }}
            >
              Details
            </button>
            <button
              className="details-button"
              onClick={() => navigate(`/chat`)}
              style={{fontSize:"16px", width:"80px",}}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessComponent.propTypes = {
  businessData: PropTypes.object.isRequired,
};

export default BusinessComponent;
