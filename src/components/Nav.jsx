import "./nav.css";
import { useState, useEffect } from "react";
import { MdOutlineMenu, MdContactSupport, MdEmail } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { FaHome, FaProjectDiagram, FaGithub } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

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
        <a href="#home">
          <FaHome className="iconNav" /> Home
        </a>
        <a href="#about">
          <SiAboutdotme className="iconNav" />
          About
        </a>

        <a href="#contact">
          <MdContactSupport className="iconNav" />
          Contact
        </a>
        <a href="#project">
          <FaProjectDiagram /> Project
        </a>
        <a href="#GitHub">
          <FaGithub />
          GitHub
        </a>
        <a href="#GitHub">
          <MdEmail />
          Email
        </a>
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
