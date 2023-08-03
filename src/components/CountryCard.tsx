import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/CountryCard.scss"
import "../styles/HomePage.scss"


export interface Country {
  name: string;
  region: string;
  flag: string;
  population: number;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: { code: string }[];
  languages: {name: string}[];
  borders: string[];
}

const CountryCard: React.FC = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const { countryName } = useParams<{ countryName: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Country[]>(`https://restcountries.com/v2/name/${countryName}`);
        setCountry(response.data[0]); // Assuming the API returns an array of countries, taking the first one
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [countryName]);

  if (loading) {
    return <div className='loading'>Please wait...</div>;
  }

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div className='country-card-container'>
      <div className='country-card-element'>
        <div className='toggle-btn'>
      <Link to="/" className="back-button">
        <FiArrowLeft />
        <h1>Back</h1>
      </Link>
      </div>
      <div className='country-details'>
      <div className="country-flags-content">
        <img src={country.flag} alt="Flag" className="flag-img" />
      </div>
      <div className="mother-container">
        <h2>{country.name}</h2>
        <div className="card-element">
            <div className='card-content'>
            <div className='native-name'>
            <p>
            <strong>Native Name:</strong> <span>{country.nativeName}</span>
          </p>
          <p>
            <strong>Population:</strong> <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            <strong>Region:</strong> <span>{country.region}</span>
          </p>
          <p>
            <strong>Sub Region:</strong> <span>{country.subregion}</span>
          </p>
          <p>
            <strong>Capital:</strong> <span> {country.capital}</span>
          </p>
          </div>
          <div className='domain-level'>
          <p>
            <strong>Top Level Domain:</strong> <span> {country.topLevelDomain}</span>
          </p>
          <p>
          <strong>Currencies:</strong>{" "}
            {country.currencies.map(currency => currency.code).join(", ")}
          </p>
          <p>
          <strong>Languages:</strong>{" "}
            {country.languages.map(language => language.name).join(", ")}
          </p>
          </div>
          </div>
          <div className='border-countries'>
          <p>
          <strong>Border Countries:</strong>{" "}
          {country.borders && country.borders.length > 0 ? (
          country.borders.map((borderCountry) => (
          <Link
          key={borderCountry}
          to={`/country/${borderCountry}`}
          className='border-country-link'>
          {borderCountry}
          </Link>
          ))
          ) : ("None")}
          </p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default CountryCard;
