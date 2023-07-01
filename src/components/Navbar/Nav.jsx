import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom"
function Nav(props) {
  
  const {onClick} = props
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-left">
          <img
            className="nav-logo"
            src={process.env.PUBLIC_URL + "/images/LogoIcon.svg"}
            alt="logo"
          />
          <h1 className="logo-title">Securing Digital World!</h1>
        </div>
        <div className="nav-right">
          <div className="nav-all-jobs nav-item">
            <img
              className="nav-icon"
              src={process.env.PUBLIC_URL + "/images/JobIcon.svg"}
              alt="Alljob"
            />
            <p>All Jobs</p>
          </div>
          <div className="nav-candidate nav-item">
            <img
              className="nav-icon"
              src={process.env.PUBLIC_URL + "/images/candidateIcon.svg"}
              alt="candidate"
            />
            <p>Add a Candidate</p>
          </div>
          <div className="nav-profile nav-item">
            <img
              className="nav-icon"
              src={process.env.PUBLIC_URL + "/images/profileIcon.svg"}
              alt="profile"
            />
            <div className="nav-profile-arrow">
              <p>My Profile</p>
              <img
                src={process.env.PUBLIC_URL + "/images/profileArrow.svg"}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav">
        <div onClick={onClick}>
          <div className="b-d"></div>
          <div className="b-d"></div>
          <div className="b-d"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
