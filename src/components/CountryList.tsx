import React, { useState, useEffect } from 'react';
import { Country } from '../components/CountryData';

interface CountryListProps {
  country: Country;
}

const CountryList: React.FC<CountryListProps> = ({ country }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay to show a loading message
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  if (loading) {
    return <div className='loading'>Loading country data...</div>;
  }

  return (
    <div className="country-list-container">
      <div className="country-flag">
        <img src={country.flag} alt="Flag" className="flag-icon" />
      </div>
      <div className="card-body">
        <h2>{country.name}</h2>
        <div className="card-title">
          <p>
            <strong>Population:</strong> <span>{country.population}</span>
          </p>
          <p>
            <strong>Region:</strong> <span>{country.region}</span>
          </p>
          <p>
            <strong>Capital:</strong> <span> {country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
