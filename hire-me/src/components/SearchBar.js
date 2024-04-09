import React from 'react'
import { FaSearch } from "react-icons/fa";
import "../styling/Searchbar.css"

const SearchBar = ({jobs, setSearchResults}) => {

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    const searchTerm= e.target.value.trim().toLowerCase(); //trims white space from what was searched

    //if nothing has been searched return
    if (!searchTerm){
    return setSearchResults(jobs)
    }

    //check every aspect of the job to see if what was entered in the search bar matches
    const resultsArray = jobs.filter(
      (job) => 
      job.businessName.toLowerCase().includes(searchTerm) || job.freelanceType.toLowerCase().includes(searchTerm))

    setSearchResults(resultsArray)
}

  return (
    <>
      <div className='search-div'>
        <form className='search' onSubmit={handleSubmit}>
            <input 
            className='search-input'
            type="text"
            placeholder='Search For A Freelancer Using Key Words'
            onChange={handleSearchChange} //handle the change
            />

            <button className='search-button'>
            <FaSearch/>
          </button>
        </form>
     </div>
    </>
  )
}

export default SearchBar