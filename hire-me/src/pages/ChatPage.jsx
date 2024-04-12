import React, { useState } from "react";
import '../styling/Footer.css';
import ChatBox from "react-chat-plugin";
import Footer from "../components/Footer";
import ChatHeader from "../components/ChatHeader";
import renovationImage from "../assets/business_images/renovation.jpeg";
import userPFP from "../assets/user.png";
import logo from "../assets/hire-me-logo.png";
import ReviewPopup from "../components/ReviewPopup";

const ChatPage = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    const [messages, setMessages] = useState([

        {
            author: { username: "SYSTEM", id: 2, avatarUrl: logo },
            text: "If your business is concluded with Mark, please leave a review:",
            timestamp: 1578366389250,
            type: "text",
            buttons: [
                {
                    type: "URL",
                    title: "Review",
                },
            ]
        },

        {
            text: "You have joined the conversation",
            timestamp: 1578366389250,
            type: "notification"
        },

        {
            author: { username: "Mark", id: 2, avatarUrl: renovationImage },
            text: "Hi, my name is Mark. I specialize in electrical work. Feel free to send a message for an inquiry!",
            type: "text",
            timestamp: 1578366425250,
            buttons: [
                {
                    type: "URL",
                    title: "Website",
                },
            ]
        },
        {
            author: {
                username: "You",
                id: 1,
                avatarUrl: userPFP
            },
            text: "Hi Mark!",
            type: "text",
            timestamp: 1578366425250,
        }
    ]);

    const handleOnSendMessage = (message) => {
        setMessages(
            messages.concat({
                author: {
                    username: "You",
                    id: 1,
                    avatarUrl: userPFP
                },
                text: message,
                timestamp: +new Date(),
                type: "text"
            })
        );
    };

    return (
        <div className="chat">
            <ChatHeader togglePopup={handlePopupToggle}/>
            {showPopup && <ReviewPopup handleClose={handlePopupToggle} />}
            <ChatBox
                messages={messages}
                userId={1}
                onSendMessage={handleOnSendMessage}
                width={"100%"}
                height={"712px"}
            />
            <Footer />
        </div>

    );
}

export default ChatPage;