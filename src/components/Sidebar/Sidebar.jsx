import React from "react";
import Profile from "../Profile/Profile";
import Job from "../../Assets/images/job-seeker 1.svg";
import Add from "../../Assets/images/CVadd.svg"
import SignOut from "../../Assets/images/exit 1.svg"
import Network from "../../Assets/images/Network.svg"
import User from "../../Assets/images/User.svg"
import Setting from "../../Assets/images/settings (1) 2.svg"
import "./Sidebar.css";
const Sidebar = (props) => {
  const { empty } = props;
  return (
    <div className={empty ? "short" : "sidebar d-flex flex-column justify-content-evenly align-items-center"}>
      <div className={empty ? "empty" : "okay"}>
        <Profile />
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div>
            <div className="d-flex flex-row justify-content-between align-items-center s-p">
              <img src={Job} alt="logo" className="job-seeker" />
              <p className="s-text">Jobs</p>
            </div>
            <div className="d-flex flex-column justify-content-around">
              <p className="links">Marked Jobs</p>
              <p className="links">Referred Jobs</p>
              <p className="links">Closed Jobs</p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-row justify-content-evenly align-items-center s-p">
              <img src={Add} alt="logo" className="job-seeker" />
              <p className="s-text">Candidate</p>
            </div>
            <div className="d-flex flex-column justify-content-around">
              <p className="links">Add a candidate to your database</p>
              <p className="links">Your candidate's database</p>
              <p className="links">Reffered candidate</p>
              <p className="links">Selected candidate</p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-evenly align-items-center s-p">
              <img src={Network} alt="logo" className="job-seeker" />
              <p className="s-text">Referral</p>
            </div>
            <div className="d-flex flex-row justify-content-evenly align-items-center s-p">
              <img src={User} alt="logo" className="job-seeker" />
              <p className="s-text">View user</p>
            </div>
            <div className="d-flex flex-row justify-content-evenly align-items-center s-p">
              <img src={Setting} alt="logo" className="job-seeker" />
              <p className="s-text">Setting</p>
            </div>
            <div className="d-flex flex-row justify-content-evenly align-items-center s-p">
              <img src={SignOut} alt="logo" className="job-seeker" />
              <p className="s-text"> Logout</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
