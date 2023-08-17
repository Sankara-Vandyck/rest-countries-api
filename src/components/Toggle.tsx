import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import '../styles/Toggle.scss'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || "false")
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`dark-mode-toggle ${darkMode ? "dark-toggle" : "light-toggle"}`}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? (
          <MdDarkMode className="icon" />
        ) : (
          <MdOutlineDarkMode className="icon" />
        )}
        <span className="mode-text">Dark Mode</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
