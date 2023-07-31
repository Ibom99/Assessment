import React from "react";
import "../styles/DashboardContainer.css";
import { Graph, TwoUsers, Bag, Folder } from "react-iconly";
import { FiChevronDown, FiShoppingCart } from "react-icons/fi";


const DashboardContainer = () => {
 
  const recentOrders = [
    {
      image: "/src/images/Rectangle 3.png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: "/src/images/Rectangle 3 (1).png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: "/src/images/Rectangle 3.png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: "/src/images/Rectangle 3 (1).png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: "/src/images/Rectangle 3 (1).png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: "/src/images/Rectangle 3 (1).png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Completed",
    },
    {
      image: "/src/images/Rectangle 3.png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: "/src/images/Rectangle 3.png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
    {
      image: "/src/images/Rectangle 3.png",
      item: "iPhone 13",
      price: "N730,000.00 x 1",
      date: "12 Sept 2022",
      status: "Pending",
    },
  ];
  

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-analytics">
        {/* first grid */}

        <div className="week">
          <div className="grid-top">
            <div className="week-icon">
              <Graph set="light" primaryColor="#5570F1" />
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
              <TwoUsers set="light" primaryColor="#1C1D22" />
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
            <div className="active-section">
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
              <Folder set="light" primaryColor="white" />
            </div>
          </div>
          <div className="bottom-section">
            <div className="products-orders">
              <p className="products-label">All Products</p>

              <h3 className="product-digit">45</h3>
            </div>

            <div className="active">
              <p className="active-product-label">Active</p>

              <div className="active-numbers">
                <p className="active-product">32</p>
                <span className="product-percentage">+24%</span>
              </div>
            </div>
          </div>
        </div>

        {/* sixth grid */}
        <div className="cart">
          <div className="grid-top">
            <div className="cart-icon">
              <FiShoppingCart />
            </div>
            <div className="date">
              <p className="date-text">This Week</p>
              <FiChevronDown />
            </div>
          </div>
          <div className="bottom-section">
            <div className="abandoned-cart">
              <p className="abandoned-label">Abandoned Cart</p>
              <div className="cart-numbers">
                <h3 className="cart-digit">20%</h3>
                <span className="cart-percentage">+0.00%</span>
              </div>
            </div>
            <div className="abandoned-customers">
              <p className="abandoned-customer-label">Customers</p>
              <p className="abandoned-customer-digit">30</p>
            </div>
          </div>
        </div>

        {/* seventh grid */}
        <div className="orders">
          <div className="orders-grid-top">
            <p className="orders-icon">Recent Orders</p>
          </div>
          <div className="order-list">
            {recentOrders.map((item, index) => (
              <div className="recent-item" key={index}>
                <img src={item.image} />
                <div className="item-section">
                  <div className="item-desc">
                    <p className="item-name">{item.item}</p>
                    <p className="item-price">{item.price}</p>
                  </div>

                  <div className="extra-details">
                    <p className="item-date">{item.date}</p>
                    <div
                      className="item-status"
                      style={{
                        color:
                          item.status !== "Completed" ? "#CC5F5F" : "#519C66",
                        backgroundColor:
                          item.status !== "Completed"
                            ? "#F57E771F"
                            : "#32936F1F",
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* eigth grid */}
        <div className="summary">
          <div className="summary-grid-top">
            <div className="summary-start">
              <p className="summary-icon">Summary</p>

              <div className="sales-summary">
                <p className="sales-text"> Sales</p>
                <FiChevronDown />
              </div>
            </div>
            <div className="date-summary">
              <p className="date-text">Last 7 Days</p>
              <FiChevronDown />
            </div>
          </div>
          <div className="summary-bottom">
            <img
              className="bar-graph"
              src="/src/images/graphBar.png"
              alt="bar graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
