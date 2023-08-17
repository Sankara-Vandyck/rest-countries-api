import React, { useState } from "react";
import FilterDropdown from "../components/FilterDropdown";
import SearchInput from "../components/SearchInput";
import CountryData from "../components/CountryData";
import "../styles/HomePage.scss";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  return (
    <div className="home-container">
      <div className="filters">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
      </div>
      <div>
        <CountryData searchTerm={searchTerm} regionFilter={regionFilter} />
      </div>
    </div>
  );
};

export default HomePage;
