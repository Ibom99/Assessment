import React from "react";
import "../styles/TopBar.css";
import { FiChevronDown } from "react-icons/fi";
import { Home, Notification } from "react-iconly";

const TopBar = () => {
  return (
    <div className="topnav-container">
      <div className="topnav-content">
        <div className="topnav-title">
          <h3 className="dashboard-text">Dashboard</h3>
        </div>
        <div className="topnav-user">
          <div className="profile-name">
            <p className="brand">Nanny's Shop </p>
            <FiChevronDown />
          </div>

          <div className="notification">
            <Notification set="bulk" primaryColor="#5570F1" />
          </div>

          <img src="/src/images/profile 1.png" />
        </div>
      </div>
      <div className="dash-house">
        <Home set="bulk" primaryColor="#5570F1" size="small" />

        <p></p>
      </div>
    </div>
  );
};

export default TopBar;
