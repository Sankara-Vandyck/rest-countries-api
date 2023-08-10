import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryCard from "./pages/CountryCard";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
