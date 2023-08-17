import React from "react";
import { FiSearch } from "react-icons/fi";
import { useAppContext } from "../components/AppContext"; 
import "../styles/SearchInput.scss";

const SearchInput: React.FC = () => {
  const { searchTerm, setSearchTerm } = useAppContext(); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <FiSearch className="search-icon" />
      <input
        type="search"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="search for a country..."
      />
    </div>
  );
};

export default SearchInput;
