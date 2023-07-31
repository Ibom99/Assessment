import React from "react";
import "../styles/Dashboard.css";
import SideBar from "../components/sideBar";
import TopBar from "../components/topBar";
import DashboardContainer from "../components/DashboardContainer";

const Dashboard = () => {
  return (
    <div className="dashboard-display">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="dashboard-content">
        <TopBar />
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Dashboard;
