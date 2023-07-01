import React, { useState } from "react";
import "./Alljobs.css";
import Details from "../Job-details/Details";
import jobData from "../../utilis/Data";
import {useNavigate} from "react-router-dom"

const AllJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
  const totalResults = 50;
  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  const renderPagination = () => {
    const paginationItems = [];

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      paginationItems.push(
        <button
          key={pageNumber}
          className={`pagination-item ${
            pageNumber === currentPage ? "active" : ""
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    }
    
    return (
      <div className="pagination-container">
        <div
          disabled={currentPage === 1}
          className="pagination-item"
          onClick={() => handlePageChange(currentPage - 1)}
        ></div>
        {paginationItems}
        <div
          disabled={currentPage === totalPages}
          className="pagination-item"
          onClick={() => handlePageChange(currentPage + 1)}
        ></div>
      </div>
    );
  };

  const renderJobDetails = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const handleClick = () => {
      navigate("/jobdetails")
    }
    return jobData
      .slice(startIndex, endIndex)
      .map((job, index) => (
        <Details
          key={index}
          id={job.id}
          title={job.title}
          company={job.company}
          onClick={handleClick}
        />
      ));
  };

  return (
    <div className="all-jobs">
       <img className='main-arrow-back me ' src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} onClick={navigate("/")}  alt="arrow-back"/>
      <p className="all-job">All jobs</p>
      <div className="searchfield d-flex flex-column justify-content-evenly">
        <p className="all-job-search h-w">Search</p>
        <input type="text" placeholder="search" className="search-fields" />
      </div>
      <div className="filter-cont">
        <p className="all-job h-w">Filters</p>
        <div className="d-flex flex-row justify-content-center">
          <select id="experience">
            <option value="experience">Years of experience</option>
          </select>
          <select id="ratings">
            <option value="ratings">Ratings</option>
          </select>
          <select id="location">
            <option value="location">Location</option>
          </select>
          <select id="sort">
            <option value="time">Sort by time</option>
          </select>
        </div>
        <p className="all-job h-w">50 results for UI/UX Designer</p>
      </div>
      <div className="job-details">{renderJobDetails()}</div>
      <div className="pagination-container">{renderPagination()}</div>
    </div>
  );
};

export default AllJobs;
