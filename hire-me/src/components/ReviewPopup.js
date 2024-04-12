import React, { useState } from "react";
import "../styling/Popup.css";
import "../index.css";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const ReviewPopup = ({ handleClose }) => {

    return (
        <div className="popup_container">
            <div className="popup_content">
        <span
            className="close_popup"
            onClick={handleClose}
            data-testid="close-button"
        >
          &times;
        </span>
                <h4 className="h4_db">Rate Mark's Renovation</h4>
                <form onSubmit={handleClose}>
                    <div className="input-group">
                        <label className="key_label" htmlFor="email">
                            Rating out of 5
                        </label>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <ReactStars
                                count={5}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>

                    </div>

                    <div className="input-group">
                        <label className="key_label" htmlFor="comments">
                            Additional Comments
                        </label>

                        <textarea
                            type="text"
                            name="email"
                            placeholder="Write comments here..."
                            rows="8"
                            cols="45"
                        />
                    </div>

                    <button className="btn-reg" type="submit">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

// PropTypes for type-checking props
ReviewPopup.propTypes = {
    handleClose: PropTypes.string, // Function to handle closing the popup
};

export default ReviewPopup;
