import React, { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useAppContext } from "../components/AppContext"; // Import the context hook
import "../styles/FilterDropdown.scss";

const FilterDropdown: React.FC = () => {
  const { regionFilter, setRegionFilter } = useAppContext(); // Access state from the context

  const regionMappings: { [key: string]: string } = {
    "all": "Filter by Region",
    "Americas": "America",
  };

  const regions = [
    "all", "Africa", "Americas", "Asia", "Europe", "Oceania",
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedRegionFilter = localStorage.getItem("regionFilter");
    if (storedRegionFilter) {
      setRegionFilter(storedRegionFilter);
    }
  }, [setRegionFilter]);

  const handleFilterChange = (selectedRegion: string) => {
    setRegionFilter(selectedRegion);
    setIsDropdownOpen(false);
    localStorage.setItem("regionFilter", selectedRegion);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown-header ${isDropdownOpen ? "open" : "close"}`}
        onClick={toggleDropdown}
      >
        <span>{regionMappings[regionFilter] || regionFilter}</span>
        <span className="dropdown-icon">
          {isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-options">
          {regions.map((region) => (
            <div
              key={region}
              onClick={() => handleFilterChange(region)}
              className="dropdown-option"
            >
              {regionMappings[region] || region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
