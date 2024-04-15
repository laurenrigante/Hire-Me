import React from 'react';
import "../styling/Searchbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({jobs, setSearchResults}) => {

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase(); //trims white space from what was searched

    //if nothing has been searched return
    if (!searchTerm) {
      return setSearchResults(jobs)
    }

    //check every aspect of the job to see if what was entered in the search bar matches
    const resultsArray = jobs.filter(
      (job) =>
      job.businessName.toLowerCase().includes(searchTerm) || job.freelanceType.toLowerCase().includes(searchTerm))

    setSearchResults(resultsArray)
  }

  return (
    <div className='search' style={{marginBottom:"20px"}}>
    <div className='search-bar-container'>
      <div className="location-icon">
        <div className="location-box">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Montreal</span>
        </div>
      </div>
      <form className='search' onSubmit={handleSubmit}>
        <input 
          className='search-input'
          type="text"
          placeholder='Search For A Freelancer'
          onChange={handleSearchChange} //handle the change
        />
        </form>
        </div>
          <div className='filters'>
            <button className="filter-button-electrician" onClick={() => handleSearchChange({ target: { value: 'Electrician' } })}>Electrician</button>
            <button className="filter-button-painter" onClick={() => handleSearchChange({ target: { value: 'Painter' } })}>Painter</button>
            <button className="filter-button-plumber" onClick={() => handleSearchChange({ target: { value: 'Plumber' } })}>Plumber</button>
            <button className="filter-button-babysitter" onClick={() => handleSearchChange({ target: { value: 'Babysitter' } })}>Babysitter</button>
            <button className="filter-button-entertainer" onClick={() => handleSearchChange({ target: { value: 'Entertainer' } })}>Entertainer</button>
          </div>
        </div>
      )
}

export default SearchBar;
