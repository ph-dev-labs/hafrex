import React from "react";
import "./Detail.css";
const Details = () => {
  return (
    <div className="d-flex flex-row justify-content-between w-100 details mb-3">
      <div className="d-flex flex-row justify-content-evenly w-50">
        <div className="profile">
          <p className="p-text">AK</p>
        </div>
        <div className="prf-det d-flex flex-column justify-content-around">
          <div>
            <div className="d-flex flex-row">
              <p className="title">Job title</p>
              <span className="p">( 10 out of 50 applicantion recieved )</span>
            </div>
            <p className="p">Workplace type</p>
            <p className="p">Number of application recieved</p>
            <p className="p">12/25/2023</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-around">
        <button>view details</button>
        <button>view details</button>
        <button>view details</button>
      </div>
    </div>
  );
};

export default Details;
