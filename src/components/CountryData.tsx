import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryList from '../components/CountryList';
import '../styles/CountryData.scss';

export interface Country {
  name: string;
  region: string;
  flag: string;
  population: number;
  capital: string;
}

interface CountryDataProps {
  searchTerm: string;
  regionFilter: string;
}

const CountryData: React.FC<CountryDataProps> = ({ searchTerm, regionFilter }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Country[]>('https://restcountries.com/v2/all')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    const search = searchTerm.toLowerCase();
    const region = regionFilter.toLowerCase();

    return countryName.includes(search) && (region === 'all' || (country.region && country.region.toLowerCase() === region));
  });

  if (loading) {
    return <div className='loading'>Please wait...</div>;
  }

  return (
    <div className='country-grid'>
      {filteredCountries.map((country) => (
        <Link className='link' to={`/country/${country.name}`} key={country.name}>
          <CountryList key={country.name} country={country} />
        </Link>
      ))}
    </div>
  );
};

export default CountryData;
