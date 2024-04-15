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
    <div className="condo-details-container">
      <div className="condo-info">
        <div className="condo-name-user-tag">
          <h2>{short}</h2>
        </div>
        <div className="image-and-info">
          <img src={picture} alt="Profile" className="profile-picture" />
          <div>
            <b>{name}</b>
            <br></br>
            {review}
            <br></br>
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
        </div>
      </div>
    </div>
  );
};

ReviewComponent.propTypes = {
  businessData: PropTypes.object.isRequired,
};

export default ReviewComponent;
