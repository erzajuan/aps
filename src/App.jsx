import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

import Home from "./pages/home/home";
import Ticket from "./pages/ticket/ticket";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("home"); // State untuk konten aktif

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (activeContent) => {
    setActiveContent(activeContent); // Update konten aktif
    setIsOpen(false); // Tutup sidebar
  };

  return (
    <React.Fragment>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Navbar */}
      <Navbar toggleMenu={toggleMenu} />

      {/* Sidebar menu */}
      <Sidebar isOpen={isOpen} handleMenuClick={handleMenuClick} />

      {/* Content */}
      <div className="content">
        {activeContent === "home" && <Home />}
        {activeContent === "ticket" && <Ticket />}
      </div>
    </React.Fragment>
  );
}

export default App;
