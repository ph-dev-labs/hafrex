import React from "react";
import "./Navbar.css";
import ReactComponent from "../../Assets/images/logo.jpg";
import Icon from "../icon-holder/icon";
import All from "../../Assets/images/Joballjob.svg";
import Cv from "../../Assets/images/CVadd.svg";
import Drop from "../../Assets/images/Vectordrop.svg"
const Navbar = () => {
  return (
    <div className="vw-100 navbar d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-row justify-content-evenly align-items-center transYs ">
        <img src={ReactComponent} alt="Logo" className="logo" />
        <p className="moto">Securing Digital World !</p>
      </div>
      <div className="d-flex flex-row justify-content-evenly class">
        <Icon icon={All} title="All Jobs" />
        <Icon icon={Cv} title="Add a Candidate" />
        <div className="d-flex flex-column justify-content-evenly align-items-center">
          <div className="profile">
            <p className="p-text">AK</p>
          </div>
          <div className="d-flex flex-row justify-content-evenly ">
            <p className="my-profile">My profile</p>
            <img src={Drop} alt="drop" className="align-self-center transY" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
