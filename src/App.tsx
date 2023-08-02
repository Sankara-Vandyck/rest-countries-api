import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the change to 'Routes' and 'Route'
import CountryData from './components/CountryData';
import FilterDropdown from './components/FilterDropdown';
import SearchInput from './components/SearchInput';
import Nav from './components/Nav';
import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');

  return (
    <Router>
      <div className="app">
        <Nav />
          <div className="filters">
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterDropdown regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
          </div>
        <Routes>
          <Route path="/" element={<CountryData searchTerm={searchTerm} regionFilter={regionFilter} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
