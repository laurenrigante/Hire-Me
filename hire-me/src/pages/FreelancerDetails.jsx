import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/FreelancerDetails.css";
import "../styling/StarRating.css"; // Import CSS file for styling
import ReviewComponent from "../components/ReviewComponent";

import paintingImage from "../assets/business_images/painting_company.jpeg";
import babysittingImage from "../assets/business_images/babysitting.jpeg";
import renovationImage from "../assets/business_images/renovation.jpeg";
import plumbingImage from "../assets/business_images/plumbing.jpg";
import electricianImage from "../assets/business_images/electrician.jpg";
import childcare from "../assets/business_images/cc.jpg";
import contractor from "../assets/business_images/contractor.jpg";
import plumbert from "../assets/business_images/plumbert.jpg";
import bdayclown from "../assets/business_images/bdayclown.jpg";
import dj from "../assets/business_images/dj.jpg";
import wb from "../assets/business_images/web.jpg";
import dogwalk from "../assets/business_images/dogwalk.jpg";
import ps from "../assets/business_images/ps.png";
import oldman from "../assets/business_images/oldman.jpg";
import oldlady from "../assets/business_images/oldlady.jpg";
import youngman from "../assets/business_images/youngman.jpg";
import younglady from "../assets/business_images/younglady.jpg";

const businessData = [
  {
    businessName: "Markell Painting",
    freelanceType: "Painter",
    picture: paintingImage,
    phoneNumber: "514-569-8475",
    email: "MarkellPainting@hotmail.com",
    businessId: "1",
    rating: 4,
    Address: "123 Main St, Montreal",
    description:
      "Markell Painting offers a vibrant touch to your home with expert painting services. From refreshing your exterior to adding color to your interior, we're here to paint your world brighter.",
    count: "1k",
  },

  {
    businessName: "Sarah's Babysitting",
    freelanceType: "Babysitter",
    picture: babysittingImage,
    phoneNumber: "514-654-3210",
    email: "sarahReese@hotmail.com",
    businessId: "2",
    rating: 5,
    Address: "456 Maple Ave, Montreal",
    description:
      "Sarah's Babysitting provides nurturing and experienced childcare. Your kids will enjoy creative playtime and educational activities in a safe and loving environment.",
      count: "2k",
  },
  {
    businessName: "Mark's Electrics",
    freelanceType: "Electrician",
    picture: renovationImage,
    phoneNumber: "514-789-0123",
    email: "MRS@hotmail.com",
    businessId: "3",
    rating: 3,
    Address: "789 Elm St, Montreal",
    description:
      "Mark's Renovation brings new life to your living space. Specializing in both minor upgrades and major overhauls, we're committed to making your renovation dreams come true.",
      count: "254",
  },
  {
    businessName: "Emily's Plumbing",
    freelanceType: "Plumber",
    picture: plumbingImage,
    phoneNumber: "438-654-9870",
    email: "emilytheplumber@outlook.com",
    businessId: "4",
    rating: 4,
    Address: "987 Oak St, Montreal",
    description:
      "Emily's Plumbing is your go-to for reliable plumbing solutions. From leaky faucets to new installations, we ensure your water is always flowing in the right direction.",
      count: "450"
  },
  {
    businessName: "Jack Electric",
    freelanceType: "Electrician",
    picture: electricianImage,
    phoneNumber: "514-012-3456",
    email: "JEsolutions@live.com",
    businessId: "5",
    rating: 5,
    Address: "345 Pine St, Montreal",
    description:
      "Jack Electric ensures your space is powered safely and efficiently. Our certified electricians provide top-notch service for all your electrical needs, big or small.",
      count: "3k"
  },
  {
    businessName: "Sophie's Childcare",
    freelanceType: "Babysitter",
    picture: childcare,
    phoneNumber: "438-555-5555",
    email: "sophieDoone@example.com",
    businessId: "6",
    rating: 4,
    Address: "555 Cedar St, Montreal",
    description:
      "Sophie's Childcare offers a fun, educational, and nurturing environment for your little ones. We provide peace of mind for parents with our high-quality childcare services.",
  },
  {
    businessName: "Adam's Maintenance",
    freelanceType: "Plumber",
    picture: contractor,
    phoneNumber: "514-222-3333",
    email: "adamPierce@acconstruction.com",
    businessId: "7",
    rating: 5,
    Address: "222 Birch St, Montreal",
    description:
      "Adam's Maintenance takes care of all your plumbing needs with prompt and professional service. We tackle everything from emergency repairs to routine maintenance.",
  },
  {
    businessName: "David's Plumbing Services",
    freelanceType: "Plumber",
    picture: plumbert,
    phoneNumber: "438-888-9999",
    email: "davidplumbing@outlook.com",
    businessId: "8",
    rating: 3,
    Address: "888 Walnut St, Montreal",
    description:
      "David's Plumbing Services offers comprehensive solutions for your home or business. Our expertise extends to installations, repairs, and maintenance for a hassle-free experience.",
  },
  {
    businessName: "Happy Clown Entertainment",
    freelanceType: "Entertainer",
    picture: bdayclown,
    phoneNumber: "514-123-4567",
    email: "happyclown@example.com",
    businessId: "9",
    rating: 5,
    Address: "123 Cherry St, Montreal",
    description:
      "Happy Clown Entertainment brings joy and laughter to any event. Our professional entertainers create memorable experiences with shows that delight audiences of all ages.",
  },
  {
    businessName: "Beats By DJ Mike",
    freelanceType: "Entertainer",
    picture: dj,
    phoneNumber: "438-987-6543",
    email: "djmike@example.com",
    businessId: "10",
    rating: 4,
    Address: "987 Apple St, Montreal",
    description:
      "Beats By DJ Mike sets the stage for unforgettable events with custom playlists and expert sound management. Let us bring the energy and atmosphere you need for your party.",
  },
  {
    businessName: "The Wedding Band Company",
    freelanceType: "Entertainer",
    picture: wb,
    phoneNumber: "555-222-3333",
    email: "weddingband@example.com",
    businessId: "11",
    rating: 5,
    Address: "222 Peach St, Montreal",
    description:
      "The Wedding Band Company adds the perfect harmony to your special day with live music that sets the tone for romance and celebration. Book us for an event that resonates with love.",
  },
];
const reviews = [
  {
    name: "John Doe",
    review: "Great service! I would definitely recommend Mark's Electrics for all your painting needs.",
    short: "Great service!",
    rating: 5,
    picture: oldman
  },
  {
    name: "Jane Smith",
    review: "Mark was very professional and did a great job painting my living room. I'm very happy with the results.",
    short: "Very professional",
    rating: 4,
    picture: oldlady
  },
  {
    name: "Alice Johnson",
    review: "Mark was tardy and rude. I would not recommend his services to anyone.",
    short: "Tardy and rude",
    rating: 1,
    picture: younglady
  },
  {
    name: "Bob Brown",
    review: "Not the friendliest, but got the job done.",
    short: "Got the job done",
    rating: 3,
    picture: youngman
  },
];

const FreelancerDetails = () => {
  const { businessId } = useParams();
  const freelancer = businessData.find((biz) => biz.businessId === businessId);

  // If freelancer data is not found, you can show a message or handle as appropriate
  if (!freelancer) {
    return (
      <div>
        Freelancer not found. Please check the ID or go back to the listing.
      </div>
    );
  }

  return (
    <div>
      <div className="freelancer-details-container">
        <div className="freelancer-profile-card">
          <img
            src={freelancer.picture}
            alt={`${freelancer.freelanceType} Avatar`}
            className="freelancer-avatar"
          />
          <div>
            <div className="freelancer-header">
              <h2 className="header1">{freelancer.businessName}</h2>
              <hr class="horizontal-line"></hr>
              <div className="label-holder">
              <div
                className={`filter-button-${freelancer.freelanceType.toLowerCase()} label`}
                style={{ textAlign: 'left', padding:"0px" }}
              >
                {freelancer.freelanceType}
              </div>
              
              <div className="star-rating" >
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < freelancer.rating ? "star filled" : "star"}
                    
                  >
                    ★
                  </span>
                  
                ))}
                <div className="review-count">
                  {freelancer.count}
                </div>
              </div>
              </div>
              
              <h2 className="header2" >Get in touch:</h2> 
              <p className="info">{freelancer.Address}</p>
              <p className="info">{freelancer.phoneNumber}</p>
              <a href={`mailto:${freelancer.email}`} style={{marginTop:"50px"}}>{freelancer.email} </a>

              <div className="abouthem">
              <h2 className="header2" >About them:</h2> 

              <p className="freelancer-description">{freelancer.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="reviews">
          {reviews.map((review, index) => (
            <ReviewComponent key={index} businessData={review} />
          ))}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default FreelancerDetails;
