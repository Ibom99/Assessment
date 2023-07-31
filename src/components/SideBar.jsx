import React from "react";
import "../styles/SideBar.css";
import { Graph } from "react-iconly";
import {
  Category,
  Bag,
  TwoUsers,
  Folder,
  Chat,
  Setting,
  Logout,
} from "react-iconly";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { FiHeadphones, FiGift, FiChevronRight } from "react-icons/fi";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    {
      path: "/",
      name: "Dashboard",
      icon: (
        <Category
          set="bold"
          primaryColor="black"
          styles={{
            ":hover": {
              color: "white",
            },
          }}
        />
      ),
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <Bag set="light" primaryColor="black" />,
      amount: "3",
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <TwoUsers set="light" primaryColor="black" />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <Folder set="light" primaryColor="black" />,
    },
    {
      path: "/messages",
      name: "Conversations",
      icon: <Chat set="light" primaryColor="black" />,
      amount: "16",
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <Setting set="light" primaryColor="black" />,
    },
  ];

  const bottomNav = [
    {
      name: "Contact Support",
      icon: <FiHeadphones />,
      background: "#5E63661A",
    },
    {
      name: "Free Gift Awaits You!",
      icon: <FiGift />,
      background: "#FFCC9133",
      description: "Upgrade Your Account",
      descIcon: <FiChevronRight />,
      height: "82px",
      paddingTop: "15px",
    },
  ];

  return (
    <div
      className="sidebar-container"
      style={{ width: isOpen ? "18.5rem" : "5.5rem", transition: "width 0.5s" }}
    >
      <div>
        <div className="top-section">
          <div className="logo">
            <Graph
              set="bulk"
              primaryColor=" #97A5EB
"
              size="xlarge"
              secondaryColor=" #FFCC91

          "
              onClick={toggle}
              style={{ margin: isOpen ? "0rem" : "0.8rem" }}
            />
          </div>

          <p className="metrix" style={{ display: isOpen ? "block" : " none" }}>
            Metrix
          </p>
        </div>
        <div className="menu-items">
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              style={{
                width: isOpen ? "14.5rem" : "3.5rem",
              }}
              activeClassName="active"
              onClick={toggle}
            >
              <div className="icon">{item.icon}</div>
              <div
                className="menu-name"
                style={{ display: isOpen ? "block" : " none" }}
              >
                {item.name}
              </div>
              <div
                className="amounts"
                style={{
                  backgroundColor: item.amount ? "#FFCC91" : "transparent",
                  right: isOpen ? "0rem" : "1rem",
                  bottom: isOpen ? "0rem" : "0.8rem",
                }}
              >
                {item.amount}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="bottom-nav">
        {bottomNav.map((item, index) => (
          <div
            className="bottom-items"
            key={index}
            onClick={toggle}
            style={{
              width: isOpen ? "14.5rem" : "3.5rem",
              backgroundColor: item.background
                ? item.background
                : "transparent",
              borderRadius: "1rem",
              marginTop: "10px",
              height: item.height && isOpen ? item.height : "3.5rem",
            }}
          >
            <div className="bottom-icon">{item.icon}</div>
            <div
              className="bottom-name"
              style={{
                display: isOpen ? "block" : "none ",
                paddingTop: item.paddingTop ? item.paddingTop : "0rem",
              }}
            >
              {item.name}
              <div
                className="desc"
                style={{ display: item.description ? "block" : "none" }}
              >
                {item.description}
                {item.descIcon}
              </div>
            </div>
          </div>
        ))}

        <div
          className="logout"
          onClick={toggle}
          style={{ width: isOpen ? "14.5rem" : "3.5rem" }}
        >
          <span>
            <Logout set="bulk" primaryColor="#CC5F5F" />
          </span>
          <p
            className="logout-title"
            style={{ display: isOpen ? "block" : " none" }}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

//   add the width is open condition to centralize the icon when the nav is closed
