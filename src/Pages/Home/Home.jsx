import React, { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import SideNav from "../../components/Sidebar/SideNav";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Aside from "../../components/Sidebar/Aside";
import MobileFooter from "../../components/footer/MobileFooter";
import SideNavData from "../../components/Sidebar/SideNavData.json";
function JobDetails() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();
  const allSideNavData = SideNavData;
  return (
    <div className="job-detail ">
      <Nav onClick={toggleMobileMenu} />
      <div className={isMobileMenuOpen ? "sidebar-menu-main" : "empty"}>
        <div className="andriod-profile">
          <img
            className="andriod-img"
            src={process.env.PUBLIC_URL + "/images/profileIcon.svg"}
            alt="ima"
          />
          <h1 className="andrioid-name">Dr. Arvind K</h1>
          <p className="andrioid-update">Update profile</p>
        </div>
        <div className="andrioid-line"></div>

        <div className="sidenav-menu-container">
          {allSideNavData.map((item) => (
            <div
              className={`sidenav-menu ${
                item.subNav ? "sub-down-space" : "down-space"
              }`}
              key={item.id}
            >
              <div className="sidenav-item">
                <img
                  src={process.env.PUBLIC_URL + item.icon}
                  alt="item.title"
                />
                <h1
                  className="sidenav-item-title"
                >
                  {item.title}
                </h1>
              </div>

              {item.subNav &&
                item.subNav.map((subItem, index) => (
                  <div className="sidenav-subItem" key={index}>
                    <p className="sidenav-subItem-text">{subItem.subTitle}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="job-detail-main">
        <div className="job-detail-main-wrapper d-flex flex-row justify-content-between">
          <SideNav />

          <Aside />
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

export default JobDetails;
