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
    <div className={styles.container}>
      <Link to="/countries" className={styles.link}>
        <button> 🡨 back</button>
      </Link>
      {country.map((item) => (
        <div key={item.population} className={styles.info}>
          <div className={styles.imgContainer}>
            <img src={item.flags.svg} alt={item.name.common} />
          </div>
          <div className={styles.officialContainer}>
            <h1>{item.name.official}</h1>
            <ul>
              <li>
                Capital:<span>{item.capital[0]}</span>
              </li>
              <li>
                Population:<span>{item.population.toLocaleString()}</span>
              </li>
              <li>
                Region:<span>{item.region}</span>
              </li>
              <li>
                Subregion:<span></span>
                {item.subregion}
              </li>
            </ul>
            {item.borders && (
              <>
                <h3>Border Countries:</h3>
                <div className={styles.border}>
                  {item.borders.map((border, index) => (
                    <button key={index}>{border}</button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
