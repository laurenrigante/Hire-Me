import React from 'react';
import '../styling/ChatHeader.css';
import infoButton from "../assets/info-button.png";
import backArrow from "../assets/arrow-back.svg";
import renovationImage from "../assets/business_images/renovation.jpeg";
import { Link } from 'react-router-dom';

const ChatHeader = ({ togglePopup }) => {
    return (
        <div className="chat-header">
            <Link to="/">
                <img className="back-arrow" src={backArrow} />
            </Link>
            <img className="profile-picture2" src={renovationImage}/>
            <div className="name">Mark's Renovation</div>
            <img className="info-button" src={infoButton} onClick={togglePopup}/>
        </div>
    );
};

export default ChatHeader;