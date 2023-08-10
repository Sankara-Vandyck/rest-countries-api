import React, { useEffect } from "react";
import '../styles/FilterDropdown.scss'

interface FilterDropdownProps {
  regionFilter: string;
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  regionFilter,
  setRegionFilter,
}) => {
  const options = [
    { value: "all", label: "Filter by Region" }, 
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value;
    setRegionFilter(selectedRegion);
    localStorage.setItem("regionFilter", selectedRegion);
  };

  useEffect(() => {
    const savedRegionFilter = localStorage.getItem("regionFilter");
    if (savedRegionFilter) {
      setRegionFilter(savedRegionFilter);
    }
  }, [setRegionFilter]);

  return (
    <div className="filter-dropdown">
      <select className="custom-select" value={regionFilter} onChange={handleFilterChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
