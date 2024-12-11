import React from "react";
import "./sidebar.css";

const Sidebar = ({ isOpen, handleMenuClick }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <a href="#home" onClick={() => handleMenuClick("home")}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#ticket" onClick={() => handleMenuClick("ticket")}>
            Ticket
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
