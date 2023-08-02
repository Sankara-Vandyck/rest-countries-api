import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
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
        {darkMode ? <MdOutlineDarkMode className="icon" /> : <MdDarkMode className="icon" />}
        <span className="mode-text">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    )
}
 
export default Toggle;