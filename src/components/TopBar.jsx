import React from "react";
import "../styles/TopBar.css";
import { FiChevronDown } from "react-icons/fi";
import { Home, Notification } from "react-iconly";
import { useLocation } from "react-router-dom";


const TopBar = () => {

  const {pathname} = useLocation()
  const getRoute = () => {
   return pathname.split("/").join("")
   
  }
  
  return (
    <div className="topnav-container">
      <div className="topnav-content">
        <div className="topnav-title">
          <h3 className="dashboard-text">{getRoute() ? getRoute() : 'Dashboard'}</h3>
        </div>
        <div className="topnav-user">
          <div className="profile-name">
            <p className="brand">Nanny's Shop </p>
            <FiChevronDown />
          </div>

          <div className="notification">
            <Notification set="bulk" primaryColor="#5570F1" />
          </div>

          <img src="https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/profile_1_rpnsxv.png" />
        </div>
      </div>
      <div className="dash-house">
        <Home set="bulk" primaryColor="#5570F1" size="small" />
{getRoute() &&  <p>/</p>}
        <p>{getRoute()}</p>
      </div>
    </div>
  );
};

export default TopBar;
