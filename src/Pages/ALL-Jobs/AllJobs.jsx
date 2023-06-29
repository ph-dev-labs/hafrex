import React from "react";
import "./Alljobs.css";

const AllJobs = () => {
  return (
    <div className="all-jobs">
      <p className="all-job">All jobs</p>
      <div className="searchfield d-flex flex-column justify-content-evenly ">
        <p className="all-job-search h-w">Search</p>
        <input type="text" placeholder="search" className="search-fields" />
      </div>
      <div className="filter-cont">
        <p className="all-job h-w">Filters</p>
        <div className="d-flex flex-row justify-content-center">
          <select id="cars">
            <option value="experience">Years of experience</option>
          </select>
          <select id="cars">
            <option value="experience">Ratings</option>
          </select>
          <select id="cars">
            <option value="experience">Location</option>
          </select>
          <select id="cars">
            <option value="experience">Sort by time</option>
          </select>
        </div>
        <p className="all-job h-w">50 results for UI/UX Designer</p>
      </div>
    </div>
  );
};

export default AllJobs;
