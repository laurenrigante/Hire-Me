import React , { useState }  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styling/LandingPage.css";
import { Link } from "react-router-dom";
import "../index.css";
import SearchBar from "../components/SearchBar";
import BusinessComponent from "../components/BusinessComponent";
import Pagination from "../components/Pagination";

const FindFreelancer = () => {

    
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this value according to your needs

    // Calculate index of the last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate index of the first item of the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  
    const businessData = [
    {
      businessName: "Markell Painting Services",
      freelanceType: "Painter",
      picture: "https://example.com/profile.jpg",
      phoneNumber: "514-569-8475",
      email: "MarkellPainting@hotmail.com",
      businessId: "1",
    },

    {
      businessName: "Sarah's Babysitting",
      freelanceType: "Babysitter",
      picture: "https://example.com/babysitting.jpg",
      phoneNumber: "514-654-3210",
      email: "sarahReese@hotmail.com",
      businessId: "2",
    },
    {
      businessName: "Mark's Renovation Solutions",
      freelanceType: "Renovator , Contractor, HandyMan",
      picture: "https://example.com/renovation.jpg",
      phoneNumber: "514-789-0123",
      email: "MRS@hotmail.com",
      businessId: "3",
    },
    {
      businessName: "Emily's Plumbing Services",
      freelanceType: "Plumber",
      picture: "https://example.com/plumbing.jpg",
      phoneNumber: "438-654-9870",
      email: "emilytheplumber@outlook.com",
      businessId: "4",
    },
    {
      businessName: "Jack Electric",
      freelanceType: "Electrician",
      picture: "https://example.com/electrical.jpg",
      phoneNumber: "514-012-3456",
      email: "JEsolutions@live.com",
      businessId: "5",
    },
    {
      businessName: "Sophie's Childcare Services",
      freelanceType: "Babysitter, Daycare",
      picture: "https://example.com/babysitting2.jpg",
      phoneNumber: "438-555-5555",
      email: "sophieDoone@example.com",
      businessId: "6",
    },
    {
      businessName: "Adam's Construction",
      freelanceType: "Contractor",
      picture: "https://example.com/construction.jpg",
      phoneNumber: "514-222-3333",
      email: "adamPierce@acconstruction.com",
      businessId: "7",
    },
    {
      businessName: "David's Plumbing Services",
      freelanceType: "Plumber",
      picture: "https://example.com/plumbing2.jpg",
      phoneNumber: "438-888-9999",
      email: "davidplumbing@outlook.com",
      businessId: "8",
    },
    {
      businessName: "Happy Clown Entertainment",
      freelanceType: "Birthday Clown , Entertainment, Party",
      picture: "https://example.com/clown.jpg",
      phoneNumber: "514-123-4567",
      email: "happyclown@example.com",
      businessId: "9",
    },
    {
      businessName: "Beats By DJ Mike",
      freelanceType: "DJ, Music, Party, Wedding",
      picture: "https://example.com/dj.jpg",
      phoneNumber: "438-987-6543",
      email: "djmike@example.com",
      businessId: "10",
    },
    {
      businessName: "The Wedding Band Company",
      freelanceType: "Wedding Band, Music, Entertainment",
      picture: "https://example.com/weddingband.jpg",
      phoneNumber: "555-222-3333",
      email: "weddingband@example.com",
      businessId: "11",
    },
    {
      businessName: "Paws & Play Dog Walking Services",
      freelanceType: "Dog Walker, Dog Walking",
      picture: "https://example.com/dogwalker.jpg",
      phoneNumber: "438-888-9999",
      email: "pawsandplay@example.com",
      businessId: "12",
    },
    {
      businessName: "Pet Sitting Services",
      freelanceType: "Pets, Pet Sitting, Animals",
      picture: "https://example.com/dogwalker.jpg",
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
          {businessData.map((businessData, index) => (
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
