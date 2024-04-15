import React from "react";
import PropTypes from "prop-types";
import "../styling/ReviewComponent.css";
import { useNavigate } from "react-router-dom";
import "../styling/StarRating.css"; // Import CSS file for styling

const ReviewComponent = ({ businessData }) => {
  const navigate = useNavigate();

  // Destructuring the businessData object to extract the properties
  const {
    name,
    short,
    review,
    rating,
    picture
  } = businessData;

  return (
    <div className="condo-details-container" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center'}}>
      <div className="condo-info">
        <div className="user-tag">
          <h2 className="title2" style={{color:" #5f43b2", margin: 0}}>{short}</h2>
        </div>
       
          <div className="star-rating2">
            {[...Array(5)].map((_, i) => {
              return (
                <span key={i} className={i < rating ? "icon filled" : "icon"}>
                  ★
                </span>
              );
            })}
             
          
        </div>



        <div className="image-and-info">
          <img src={picture} alt="Profile" className="profile-picture" />
          <div>
            <b style={{color:"#3a3153"}}>{name}</b>
            <br></br>
            {review}
            <br></br>
          </div>
        </div>
     
      </div>
    </div>
  );
};

ReviewComponent.propTypes = {
  businessData: PropTypes.object.isRequired,
};

export default ReviewComponent;
