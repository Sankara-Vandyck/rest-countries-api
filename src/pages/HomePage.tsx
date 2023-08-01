import { useState } from "react";
import CountryData from "../components/CountryData";
import FilterDropdown from "../components/FilterDropdown";
import SearchInput from "../components/SearchInput";
import "../styles/HomePage.scss";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [regionFilter, setRegionFilter] = useState("");
  
    return (
      <div className="home-container">
        <div className="home-element">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterDropdown regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
        </div>
        <div className="country-home-data">
          <CountryData searchTerm={searchTerm} regionFilter={regionFilter} />
        </div>
      </div>
    );
  };

export default HomePage;
