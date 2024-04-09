import React , { useState }  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/LandingPage.css";
import { Link } from "react-router-dom";
import "../index.css";
import SearchBar from "../components/SearchBar";
import BusinessComponent from "../components/BusinessComponent";
import Pagination from "../components/Pagination";


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
const FindFreelancer = () => {

    
  const [currentPage, setCurrentPage] = useState(1);
  //const [itemsPerPage] = useState(4); // Change this value according to your needs

  const itemsPerPage=4;
    // Calculate index of the last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate index of the first item of the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  
    const businessData = [
    {
      businessName: "Markell Painting Services",
      freelanceType: "Painter",
      picture: paintingImage,
      phoneNumber: "514-569-8475",
      email: "MarkellPainting@hotmail.com",
      businessId: "1",
    },

    {
      businessName: "Sarah's Babysitting",
      freelanceType: "Babysitter",
      picture: babysittingImage,
      phoneNumber: "514-654-3210",
      email: "sarahReese@hotmail.com",
      businessId: "2",
    },
    {
      businessName: "Mark's Renovation Solutions",
      freelanceType: "Renovator , Contractor, HandyMan",
      picture:renovationImage,
      phoneNumber: "514-789-0123",
      email: "MRS@hotmail.com",
      businessId: "3",
    },
    {
      businessName: "Emily's Plumbing Services",
      freelanceType: "Plumber",
      picture: plumbingImage,
      phoneNumber: "438-654-9870",
      email: "emilytheplumber@outlook.com",
      businessId: "4",
    },
    {
      businessName: "Jack Electric",
      freelanceType: "Electrician",
      picture: electricianImage,
      phoneNumber: "514-012-3456",
      email: "JEsolutions@live.com",
      businessId: "5",
    },
    {
      businessName: "Sophie's Childcare Services",
      freelanceType: "Babysitter, Daycare",
      picture: childcare,
      phoneNumber: "438-555-5555",
      email: "sophieDoone@example.com",
      businessId: "6",
    },
    {
      businessName: "Adam's Construction",
      freelanceType: "Contractor",
      picture: contractor,
      phoneNumber: "514-222-3333",
      email: "adamPierce@acconstruction.com",
      businessId: "7",
    },
    {
      businessName: "David's Plumbing Services",
      freelanceType: "Plumber",
      picture: plumbert,
      phoneNumber: "438-888-9999",
      email: "davidplumbing@outlook.com",
      businessId: "8",
    },
    {
      businessName: "Happy Clown Entertainment",
      freelanceType: "Birthday Clown , Entertainment, Party",
      picture: bdayclown,
      phoneNumber: "514-123-4567",
      email: "happyclown@example.com",
      businessId: "9",
    },
    {
      businessName: "Beats By DJ Mike",
      freelanceType: "DJ, Music, Party, Wedding",
      picture: dj,
      phoneNumber: "438-987-6543",
      email: "djmike@example.com",
      businessId: "10",
    },
    {
      businessName: "The Wedding Band Company",
      freelanceType: "Wedding Band, Music, Entertainment",
      picture: wb,
      phoneNumber: "555-222-3333",
      email: "weddingband@example.com",
      businessId: "11",
    },
    {
      businessName: "Paws & Play Dog Walking Services",
      freelanceType: "Dog Walker, Dog Walking",
      picture: dogwalk,
      phoneNumber: "438-888-9999",
      email: "pawsandplay@example.com",
      businessId: "12",
    },
    {
      businessName: "Pet Sitting Services",
      freelanceType: "Pets, Pet Sitting, Animals",
      picture: ps,
      phoneNumber: "438-888-9999",
      email: "Jessie_animal_lover@hotmail.com",
      businessId: "13",
    },
  ];

      // Slice the array of business data to get items for the current page
      const currentBusinessData = businessData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Header />

      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          {/* Map over the businessDataList and render BusinessComponent for each business */}
          {currentBusinessData.map((businessData, index) => (
            <BusinessComponent key={index} businessData={businessData} />
          ))}
        </div>

        <div>
          <Pagination 
          itemsPerPage={itemsPerPage}
          totalItems={businessData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FindFreelancer;
