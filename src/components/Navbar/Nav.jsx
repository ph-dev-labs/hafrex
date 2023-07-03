import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

function Nav(props) {
  const { onClick } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <Link to="/alljobs">
              <img
                className="nav-icon"
                src={process.env.PUBLIC_URL + "/images/JobIcon.svg"}
                alt="Alljob"
              />
            </Link>
            <p>All Jobs</p>
          </div>
          <div className="nav-candidate nav-item">
            <Link to="/refer">
              <img
                className="nav-icon"
                src={process.env.PUBLIC_URL + "/images/candidateIcon.svg"}
                alt="candidate"
              />
            </Link>
            <p>Add a Candidate</p>
          </div>
          <div className="nav-profile nav-item">
            <img
              className="nav-icon"
              src={process.env.PUBLIC_URL + "/images/profileIcon.svg"}
              alt="profile"
              onClick={openModal}
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
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h3>Modal Content</h3>
          <p>You can add any content you want in the modal.</p>
        </Modal>
      )}
    </div>
  );
}

export default Nav;
