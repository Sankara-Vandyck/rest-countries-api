import React from 'react';
import '../styles/CountryList.scss';
import { Country } from './CountryData';

interface CountryListProps {
  country: Country;
}

const CountryList: React.FC<CountryListProps> = ({ country }) => {

  return (
    <div className="country-container">
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
