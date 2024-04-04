import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/LandingPage.css";
import { Link } from "react-router-dom";
import "../index.css";


/**
 * Functional component representing the landing page.
 * @returns {JSX.Element} - The JSX for the landing page.
 */
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="background-container">
        <div className="card2-container">
          <div className="small-card">
            <h2 className="landingpage">HireMe!</h2>
            <p className="lptext1">
             
        Finding the Right Freelancer for You is as Easy as 1, 2, 3!
            </p>
            <div
              className="btndiv"
             // style={{ display: store.get("?user") ? "none" : "block" }}
            >
              <Link to="/signup" className="btn">
                {" "}
                Sign Up
              </Link>
              <Link to="/login" className="btn" style={{ marginLeft: "50px" }}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us">
        <div className="about-us-content">
          <h3 className="aboutush3"> About Us</h3>
          <div className="line-div">
            <div className="green-line"></div>
          </div>

          <div>

          <p className="generaltext" style={{paddingBottom:"150px"}}>At HireMe, we're dedicated to revolutionizing the way businesses connect with freelance talent.
           Our platform serves as a bridge between skilled freelancers and individuals seeking their expertise, offering a seamless and efficient process for finding the perfect match. 
           Whether you're a freelancer looking to promote yourself, or an individual looking for help, HireMe provides the tools and resources to streamline your search process. 
           With our commitment to transparency, accessibility, and fostering mutually beneficial relationships, we strive to empower freelancers to achieve their goals and thrive in today's dynamic online market.
          </p>
          <h3 className="aboutush3">Explore what makes us unique</h3>
          </div>
          <div className="cards2">
            <div className="card2">
              <h5 className="card-title2">Easily Promote Your Business</h5>
              <p>
                {" "}
                HireMe provides an easy-to-use and comprehensive platform that simplifies the process of promoting your business. Our platform allows you to grow your busines
                by reaching a greater audience. 
                Take the right steps and join HireMe now!
              </p>
            </div>

            <div className="card2">
              <h5 className="card-title2">Find the Freelancer for You</h5>
              <p>
              Simply browse through our talented pool of freelancers, each with reputable and real reviews by other users like you, and find the perfect match for your personal needs.
              </p>
            </div>

            <div className="card2">
              <h5 className="card-title2"> FREE OF CHARGE!</h5>
              <p>
              At HireMe, we believe in democratizing access to talent. Our platform is completely free to use, ensuring equal opportunities for all freelancers and businesses, as well
              as providing an easy to use and reliable service for the general public.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
