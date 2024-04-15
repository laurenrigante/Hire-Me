import React from 'react';
import '../styling/ChatHeader.css';
import infoButton from "../assets/info-button.png";
import backArrow from "../assets/arrow-back.svg";
import renovationImage from "../assets/business_images/renovation.jpeg";


const ChatHeader = ({ togglePopup }) => {
    return (
        <div className="chat-header">
            <img className="back-arrow" src={backArrow}/>
            <img className="profile-picture2" src={renovationImage}/>
            <div className="name">Mark's Renovation</div>
            <img className="info-button" src={infoButton} onClick={togglePopup}/>
        </div>
    );
};

export default ChatHeader;