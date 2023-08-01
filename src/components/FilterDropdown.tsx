import React from 'react';
import '../styles/FilterDropdown.scss';

interface FilterDropdownProps {
  regionFilter: string;
  setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ regionFilter, setRegionFilter }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(e.target.value);
  };

  return ( 
    <div className="filter-dropdown">
      <div className="dropdown-container">
        <select value={regionFilter} onChange={handleFilterChange}>
          <option value="all" className='region'>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default FilterDropdown;
