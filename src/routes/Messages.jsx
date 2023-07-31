import React from "react";
import "../styles/Messages.css";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import MessageContainer from "../components/MessageContainer";

const Messages = () => {
  return (
    <div className="messages-display">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="messages-content">
        <TopBar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Messages;
