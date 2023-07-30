import React from "react";
import "../styles/SideBar.css";
import { Graph } from "react-iconly";
import { Category, Bag, TwoUsers, Folder, Chat, Setting } from "react-iconly";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen)
}

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
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <Setting set="light" primaryColor="black" />,
    },
  ];

  return (
    <div className="sidebar-container"
    style={{width: isOpen ? "18.5rem" : "5.5rem", transition: "width 0.5s",}}
    
    >
      <div className="top-section">
        <div className="logo">
        <Graph
          set="bulk"
          primaryColor=" #97A5EB
"size='xlarge'
          secondaryColor=" #FFCC91

          " 
          onClick={toggle}
          style={{margin : isOpen ? "0rem" : "0.8rem"}}
        />
        </div>
      

        <p className="metrix" style={{display: isOpen ? "block" : " none"}} >Metrix</p>
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
            <div className="icon" >{item.icon}</div>
            <div className="menu-name"style={{display: isOpen ? "block" : " none"}} >{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
