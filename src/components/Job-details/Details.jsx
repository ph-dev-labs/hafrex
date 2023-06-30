import React, { useState } from "react";
import "./Detail.css";

const Details = (props) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavyChange = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div
      className={`d-flex flex-row justify-content-between w-100 details mb-3 ${
        favorite ? "favorite" : ""
      }`}
    >
      <div className="d-flex flex-row justify-content-evenly w-50">
        <div className="profile p-t">
          <p className="p-text">AK</p>
        </div>
        <div className="prf-det d-flex flex-column justify-content-around">
          <div>
            <div className="d-flex flex-row">
              <p className="title">Job title</p>
              <span className="p">(10 out of 50 applications received)</span>
            </div>
            <p className="p">Workplace type</p>
            <p className="p">Number of applications received</p>
            <p className="p">12/25/2023</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-around">
        <button>View details</button>
        <button>Refer Candidate</button>
        <button onClick={handleFavyChange}>
          {favorite ? "Unmark job" : "Mark job"}
        </button>
      </div>
    </div>
  );
};

export default Details;
