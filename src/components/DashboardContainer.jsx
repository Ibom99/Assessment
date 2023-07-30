import React from "react";
import "../styles/DashboardContainer.css";
import { Graph, TwoUsers } from "react-iconly";
import { FiChevronDown } from "react-icons/fi";

const DashboardContainer = () => {
  return (
    <div className="dashboard-content-container">
      <div className="dashboard-analytics">
{/* first grid */}

        <div className="week">
          <div className="top-section">
            <div className="week-icon">
              <Graph set="light" primaryColor="#5570F1" size="small"/>
            </div>
            <div className="date">
              <p className="date-text">This Week</p>
              <FiChevronDown />
            </div>
          </div>
          <div className="bottom-section">
            <div className="sales">
              <p className="sales-label">Sales</p>
              <h3 className="sales-digit">4,000,000.0</h3>
            </div>
            <div className="volume">
              <p className="volume-label">Volume</p>

              <div className="volume-numbers">
              <p className="volume-digit">450</p>
              <span className="volume-percentage">+20.00%</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* second grid */}
        <div className="week-one">
        <div className="top-section">
            <div className="customer-icon">
              <TwoUsers set="light" primaryColor="#1C1D22" size="small"/>
            </div>
            <div className="date">
              <p className="date-text">This Week</p>
              <FiChevronDown />
            </div>
          </div>
          <div className="bottom-section">
            <div className="customers">
              <p className="customers-label">Customers</p>
              <div className="customer-numbers">
              <h3 className="customer-digit">1,250</h3>
              <span className="customer-percentage">+15.80%</span>
              </div>
             
            </div>
            <div className="active">
              <p className="active-label">Active</p>

              <div className="active-numbers">
              <p className="active-digit">1,180</p>
              <span className="active-percentage">+85%</span>
              </div>
              
            </div>
          </div>
        </div>


        <div className="week-two">
          <p>Orders</p>
        </div>
        <div className="marketing">
          <p>Marketing</p>
        </div>
        <div className="products">
          <p>All products</p>
        </div>
        <div className="cart">
          <p>Abandoned Carts</p>
        </div>
        <div className="orders">
          <p>Recent Order</p>
        </div>
        <div className="summary">
          <p>Summary</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
