import React from "react";
import { Link } from "react-router-dom";
import chat from "../assets/chat.png";

const ChatIcon = () => {
  return (
    <div>
      <Link to="/auth">
        <div className="chat-block">
          <img src={chat} className="chat-icon" />
        </div>
      </Link>
    </div>
  );
};

export default ChatIcon;
