import React from 'react';
import PropTypes from 'prop-types';
import "../styling/BusinessComponent.css";
import {useNavigate} from "react-router-dom";



const BusinessComponent = ({businessData}) => {
    const navigate = useNavigate();
    
  // Destructuring the businessData object to extract the properties
  const { businessName, freelanceType, picture, phoneNumber, email, businessId } = businessData;

    

  return (
    <div>
         <div className="condo-details-container">
            <div className="condo-info">
                <div className='condo-name-user-tag'>
                    <h2>{businessName}</h2>
                </div>
                
                {picture && <img src={picture} alt="Profile" className="profile-picture" />}
                <div className='freelance-type'>
                    {freelanceType}
                </div>
                <p>Phone Number: {phoneNumber}</p>
                <p>Email: {email} </p>
                
                <div className='locker-details'>
                    <button className="details-button" onClick={() => navigate(`/mybusinessprofile/${businessId}`)}>See Profile</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BusinessComponent;