import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/LandingPage.css";
import { Link } from "react-router-dom";
import "../index.css";




const FindFreelancer = () => {
  return (
    <div>
        <Header/>


        <div>
            <div>
                <p> insert serachbar here</p>
            </div>
            <div>
                <p> insert freelancer componets here</p>
            </div>

            <div>
                <p> Insert pagination here</p>
            </div>
        </div>
        <Footer/>
    </div>
  );
};
export default FindFreelancer;

