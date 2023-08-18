import React from "react";
import { useAppContext } from "../components/AppContext";
import CountryData from "../components/CountryData";
import SearchInput from "../components/SearchInput";
import FilterDropdown from "../components/FilterDropdown";
import '../styles/HomePage.scss'

const HomePage: React.FC = () => {
  useAppContext();

  return (
    <div className="home-container">
      <div className="filters">
        <SearchInput />
        <FilterDropdown />
      </div>
      <>
        <CountryData />
      </>
    </div>
  );
};

export default HomePage;
