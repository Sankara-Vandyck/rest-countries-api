import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../styles/SearchInput.scss';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return ( 
    <div className="search">
      <FiSearch className="search-icon" />
      <input
        type='search'
        name='search'
        id='search'
        value={searchTerm}
        onChange={handleSearch}
        placeholder='search for a country...'
      />
    </div>
  );
};

export default SearchInput;
