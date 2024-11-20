import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>YouTube Video Downloader</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
