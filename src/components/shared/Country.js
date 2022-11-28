import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import styles from './County.module.css';

const Country = ({ data }) => {
  return (
    <div className={styles.container}>
      <Link to={`/countries/${v4()}`}>
        {/* <Link to={`/countries/${id}`}> */}
        <img className={styles.img} src={data.flags.svg} alt="country" />
        <h2>{data.name.common}</h2>
        <div className={styles.countryContainer}>
          <p>Population: {data.population} </p>
          <p>Region: {data.region}</p>
          <p>Capital: {data.capital}</p>
          <p>id:{v4()}</p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
