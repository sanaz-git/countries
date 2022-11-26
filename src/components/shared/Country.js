import React from 'react';
import { Link } from 'react-router-dom';

import styles from './County.module.css';

const Country = ({ data }) => {
  return (
    <div className={styles.container}>
      <Link to={`/countries/${data.id}`}>
        <img className={styles.img} src={data.flags.svg} alt="country" />
        <h2>{data.name.common}</h2>
        <div className={styles.countryContainer}>
          <p>Population: {data.population} </p>
          <p>Region: {data.region}</p>
          <p>Capital: {data.capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
