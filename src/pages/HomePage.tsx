import React from "react";
import { useAppContext } from "../components/AppContext";
import CountryData from "../components/CountryData";
import SearchInput from "../components/SearchInput";
import FilterDropdown from "../components/FilterDropdown";
import '../styles/HomePage.scss'


const HomePage: React.FC = () => {
  const { searchTerm,  regionFilter } = useAppContext();

  return (
    <div className="home-container">
      <div className="filters">
        <SearchInput />
        <FilterDropdown />
      </div>
      <div>
        <CountryData searchTerm={searchTerm} regionFilter={regionFilter} />
      </div>
    </div>
  );
};

export default HomePage;
