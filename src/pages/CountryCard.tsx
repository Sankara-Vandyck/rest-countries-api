import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import "../styles/CountryCard.scss";

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
  const [showContent, setShowContent] = useState(false); // New state to control content display
  const { countryName } = useParams<{ countryName: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Country[]>(
          `https://restcountries.com/v2/name/${countryName}`
        );
        setCountry(response.data[0]);

        if (response.data[0].borders && response.data[0].borders.length > 0) {
          const borderAlphaCodes = response.data[0].borders.join(",");
          const borderResponse = await axios.get<Country[]>(
            `https://restcountries.com/v2/alpha?codes=${borderAlphaCodes}`
          );
          setBorderCountries(borderResponse.data);
        }

        // Introduce a 2-second delay before showing the content
        setTimeout(() => {
          setLoading(false);
          setShowContent(true);
        }, 2000);
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
          <Link to="/" className="back-button">
            <FiArrowLeft className="arrow-left" />
            <h1>Back</h1>
          </Link>
        </div>
        <div className="country-details">
          <div className="country-flags-content">
            <img src={country.flag} alt="Flag" className="flag-img" />
          </div>
          <div className="mother-container">
            <h2>{country.name}</h2>

            <div className="card-content">
              <div className="native-name">
                <p>
                  <strong>Native Name:</strong>
                  <span>{country.nativeName}</span>
                </p>
                <p>
                  <strong>Population:</strong>
                  <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                  <strong>Region:</strong> <span>{country.region}</span>
                </p>
                <p>
                  <strong>Sub Region:</strong>
                  <span>{country.subregion}</span>
                </p>
                <p>
                  <strong>Capital:</strong> <span>{country.capital}</span>
                </p>
              </div>
              <div className="domain-level">
                <p>
                  <strong>Top Level Domain:</strong>
                  <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  <strong>Currencies:</strong>
                  <h1>
                    {" "}
                    {country.currencies
                      .map((currency) => currency.code)
                      .join(", ")}
                  </h1>
                </p>
                <p>
                  <strong>Languages:</strong>
                  <h1>
                    {" "}
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </h1>
                </p>
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
                          className="border-country-link"
                          style={{ paddingLeft: "0.5rem" }}
                        >
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
