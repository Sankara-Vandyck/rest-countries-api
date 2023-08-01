import { FaMoon, FaSun } from "react-icons/fa"
import { useState, useEffect } from "react"
import '../styles/Toggle.scss'


const Toggle = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode ? JSON.parse(storedDarkMode) : false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
        }, [darkMode]);

    return ( 
        <button className="toggle-button" onClick={toggleDarkMode}>
        {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        <span className="mode-text">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    )
}
 
export default Toggle;