import React from "react";
import "../styles/Chats.css";
import { Bag, Send } from "react-iconly";
import { FiCheck, FiPlus, FiSmile } from "react-icons/fi";

const Chats = () => {
  return (
    <div className="chats-container">
      <div className="chats-header">
        <img
          className="pop-image"
          src="https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png"
        />
        <div className="popchat-space">
          <div className="popname-status">
            <h3 className="popchat-name">Jane Doe</h3>
            <div className="popstatus-time">
              <p className="online">
                <span className="online-color"></span>Online
              </p>
              <p className="pop-time">12:55 am</p>
            </div>
          </div>
          <div className="customer-chat">
            <p className="new-customer">New Customer</p>
            <div className="chatview-orders">
              <p className="view-profile">View Profile</p>
              <div className="icon-orders">
                <Bag set="light" />
                <p className="zero-orders">0 Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chats-body">
        <div className="present-date">
          <p className="present-date-pop">12 August 2022</p>
        </div>
        <div className="conversation-body">
          <div className="conversation-one">
            <div className="product-chat-pop">
              <img src="https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_yy1oim.png" />
              <div className="iphone-price">
                <p className="iphone-price-text">iPhone 13</p>
                <div className="price-stock">
                  <p className="price-stock-text">N730,000,000.00</p>
                  <p className="price-in-stock">12 in stock</p>
                </div>
              </div>
            </div>
            <div className="message-bubble">
              <p>Hello, I want to make enquiries about your product</p>
            </div>
            <div className="timestamp-pop">
              <p className="timestamp-text">12:55 am</p>
            </div>
          </div>

          <div className="conversation-two">
            <p className="conversation-two-text">
              Hello Janet, thank you for reaching out
            </p>
            <div className="seen">
              <p className="seen-text">12:57 am</p>
              <span className="seen-icon">
                <FiCheck />
              </span>
            </div>
          </div>

          <div className="conversation-three">
            <p className="conversation-three-text">What do you need to know?</p>
            <div className="seen">
              <p className="seen-text">12:57 am</p>
              <span className="seen-icon">
                <FiCheck />
              </span>
            </div>
          </div>

          <div className="present-date-two">
            <p className="present-date-two-text">Today</p>
          </div>

          <div className="message-bubble-two">
            <p>
              I want to know if the price is negotiable, i need about 2 Units
            </p>
          </div>

          <div className="timestamp-pop-two">
            <p className="timestamp-text-two">12:55 am</p>
          </div>
          <div className="send-message-input">
            <div className="plus-icon">
              <FiPlus />
            </div>
            <input
              className="input-send-pop"
              type="text"
              placeholder="Your message"
            />
            <div className="smile-icon">
              <FiSmile />
            </div>
            <div className="send-btn">
              <p className="send-btn-text">Send</p>
              <Send set="bulk" size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
