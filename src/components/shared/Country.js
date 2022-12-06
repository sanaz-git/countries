import React from 'react';
import { Link } from 'react-router-dom';

import styles from './County.module.css';

const Country = ({ data }) => {
  return (
    <div className={styles.mainContainer}>
      <Link to={`/countries/${data.name.common}`} className={styles.link}>
        <img className={styles.img} src={data.flags.svg} alt="country" />
        <h2>{data.name.common}</h2>
        <div className={styles.countryContainer}>
          <p>
            Population: <span>{data.population.toLocaleString()}</span>{' '}
          </p>
          <p>
            Region: <span>{data.region}</span>
          </p>
          <p>
            Capital: <span>{data.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
