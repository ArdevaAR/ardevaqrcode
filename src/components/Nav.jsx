import "./nav.css";
import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function Nav({ klikSide }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav className="navigasi">
      <MdOutlineMenu onClick={klikSide} className="menu" />

      <div className="deslink">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#project">Project</a>
        <a href="#GitHub">GitHub</a>
        <a href="#GitHub">Email</a>
      </div>

      <h1>
        Ardeva<span>Alghifari</span>.
      </h1>

      {darkMode ? (
        <IoSunnyOutline
          className="DarkMode"
          onClick={toggleDarkMode}
          title="Light Mode"
        />
      ) : (
        <IoMoonOutline
          className="DarkMode"
          onClick={toggleDarkMode}
          title="Dark Mode"
        />
      )}
    </nav>
  );
}
