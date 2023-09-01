import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryList from "../pages/CountryList";
import { useAppContext } from "../components/AppContext";
import { fetchCountryData } from "./CounteyAPI";
import '../styles/CountryData.scss'



export interface Country {
  name: string;
  region: string;
  flag: string;
  population: number;
  capital: string;
}

const CountryData: React.FC = () => {
  const { searchTerm, regionFilter } = useAppContext();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetchCountryData().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    const search = searchTerm.toLowerCase();
    const region = regionFilter.toLowerCase();

    return (
      countryName.includes(search) &&
      (regionFilter === "all" || (country.region && country.region.toLowerCase() === region))
    );
  });

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <Link className="link" to={`/country/${country.name}`} key={country.name}>
            <CountryList key={country.name} country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryData;
