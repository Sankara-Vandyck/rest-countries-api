import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppContext } from "../components/AppContext"; 
import "../styles/SearchInput.scss";

const SearchInput: React.FC = () => {
  const { searchTerm, setSearchTerm } = useAppContext(); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <AiOutlineSearch className="search-icon" />
      <input
        type="search"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchInput;
