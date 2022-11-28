import React, { useContext } from 'react';
import { v4 } from 'uuid';
//Context
import { CountryContext } from '../context/CountryContextProvider';

//Components
import Country from './shared/Country';
import Filter from './shared/Filter';

//Styles
import styles from './HomePage.module.css';

const HomePage = () => {
  const countriesData = useContext(CountryContext);
  return (
    <>
      <div>
        <Filter />
      </div>
      <div className={styles.container}>
        {countriesData.map((country) => (
          <Country key={v4()} data={country} />
          // <Country key={numericCode} data={country} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
