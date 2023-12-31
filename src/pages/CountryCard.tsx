import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fetchCountryData } from "../components/CounteyAPI";
import "../styles/CountryCard.scss"

interface Country {
  name: string;
  region: string;
  flag: string;
  population: number;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: { code: string }[];
  languages: { name: string }[];
  borders: string[];
}

const CountryCard: React.FC = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { countryName } = useParams<{ countryName: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountryData(undefined, countryName);
        setCountry(data[0]);
  
        if (data[0].borders && data[0].borders.length > 0) {
          const borderAlphaCodes = data[0].borders.join(',');
          const borderData = await fetchCountryData(undefined, undefined, borderAlphaCodes);
          setBorderCountries(borderData);
        }
        setTimeout(() => {
          setLoading(false);
          setShowContent(true);
        }, 1000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [countryName]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  if (!country) {
    return <div>Country not found.</div>;
  }

  if (!showContent) {
    return <div>Country not found.</div>;
  }

  return (
    <div className="country-card-container">
      <div className="country-card-element">
        <div className="toggle-btn">
          <button
            className="back-button"
            onClick={() => navigate(-1)}>
            <FiArrowLeft className="arrow-left" />
            <h1>Back</h1>
          </button>
        </div>
        <div className="country-details">
          <div className="country-flags-content">
            <img src={country.flag} alt="Flag" className="flag-img" />
          </div>
          <div className="mother-container">
            <h2>{country.name}</h2>

            <div className="card-content">
              <div className="native-name">
                <div className="country-native">
                  <strong>Native Name:</strong> <span>{country.nativeName}</span>
                </div>
                <div className="country-population">
                  <strong>Population:</strong> <span>{country.population.toLocaleString()}</span>
                </div>
                <div className="country-region">
                  <strong>Region:</strong> <span>{country.region}</span>
                </div>
                <div className="country-subregion">
                  <strong>Sub Region:</strong> <span>{country.subregion}</span>
                </div>
                <div className="country-capitals">
                  <strong>Capital:</strong> <span>{country.capital}</span>
                </div>
              </div>
              <div className="domain-level">
                <div className="country-domain">
                  <strong>Top Level Domain:</strong>
                  <span>{country.topLevelDomain}</span>
                </div>
                <div className="country-currencies">
                  <strong>Currencies:</strong>
                  <h1>
                    {" "}
                    {country.currencies
                      .map((currency) => currency.code)
                      .join(", ")}
                  </h1>
                </div>
                <div className="country-language">
                  <strong>Languages:</strong>
                  <h1>
                    {" "}
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </h1>
                </div>
              </div>
            </div>
            <div className="border-countries">
              <div className="allCountries">
                <strong className="country-border-name">
                  Border Countries:
                </strong>{" "}
                <div className="border-list">
                  {borderCountries.length > 0
                    ? borderCountries.map((borderCountry) => (
                      <Link
                        key={borderCountry.name}
                        to={`/country/${borderCountry.name}`}
                        className="border-country-link">
                        {borderCountry.name}
                      </Link>
                    ))
                    : "No border country"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
