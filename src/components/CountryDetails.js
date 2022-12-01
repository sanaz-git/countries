import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Styles
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`,
      );
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, [name]);

  return (
    <div>
      {country.map((item) => (
        <div key={item.population} className={styles.container}>
          <div>
            <img src={item.flags.svg} alt={item.name.common} />
          </div>
          <div>
            <h1>{item.name.official}</h1>
            <ul>
              <li>Capital:{item.capital[0]}</li>
              <li>Population:{item.population.toLocaleString()}</li>
              <li>Region:{item.region}</li>
              <li>Subregion:{item.subregion}</li>
            </ul>
            {item.border && (
              <>
                <h3>Borders</h3>
                <ul>
                  {item.borders.map((border, index) => (
                    <li key={index}>{border}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}

      <Link to="/countries">back</Link>
    </div>
  );
};

export default CountryDetails;
