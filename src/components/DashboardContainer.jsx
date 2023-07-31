import React from "react";
import "../styles/DashboardContainer.css";
import { Graph, TwoUsers, Bag, Folder } from "react-iconly";
import { FiChevronDown } from "react-icons/fi";

const DashboardContainer = () => {
  return (
    <div className="dashboard-content-container">
      <div className="dashboard-analytics">
        {/* first grid */}

        <div className="week">
          <div className="grid-top">
            <div className="week-icon">
              <Graph set="light" primaryColor="#5570F1" size="small" />
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
          <div className="grid-top">
            <div className="customer-icon">
              <TwoUsers set="light" primaryColor="#1C1D22" size="small" />
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

        {/* third grid */}
        <div className="week-two">
          <div className="grid-top">
            <div className="order-icon">
              <Bag
                set="light"
                primaryColor="black
"
                size="small"
              />
            </div>
            <div className="date">
              <p className="date-text">This Week</p>
              <FiChevronDown />
            </div>
          </div>

          <div className="bottom-section">
            <div className="week-orders">
              <p className="orders-label">All Orders</p>

              <h3 className="order-digit">450</h3>
            </div>

            <div className="pending">
              <p className="pending-label">Pending</p>

              <p className="pending-digit">5</p>
            </div>
            <div className="completed">
              <p className="completed-label"> Completed</p>
              <p className="completed-digit"> 445</p>
            </div>
          </div>
        </div>

        {/* fourth grid */}
        <div className="marketing">
          <div className="marketing-grid-top">
            <p className="marketting-icon">Marketting</p>
            <div className="date">
              <p className="date-text">This Week</p>
              <FiChevronDown />
            </div>
          </div>

          <div className="mid-section">
            <div className="acquisition">
              <span className="color-one"></span>{" "}
              <p className="color-label">Acquisition</p>
            </div>
            <div className="purchase">
              <span className="color-two"></span>
              <p className="color-label">Purchase</p>
            </div>
            <div className="retention">
              <span className="color-three"></span>
              <p className="color-label">Retention</p>
            </div>
          </div>
          <div className="marketing-bottom">
            <img
              className="donut-graph"
              src="/src/images/Group 2.png"
              alt="donut graph"
            />
          </div>
        </div>

        {/* fifth grid */}
        <div className="products">
          <div className="grid-top">
            <div className="products-icon">
              <Folder set="light" primaryColor="white" size="small" />
            </div>
          </div>
        </div>

        {/* sixth grid */}
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
