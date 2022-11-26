import React, { useContext } from 'react';
import { v4 } from 'uuid';
//Context
import { CountryContext } from '../context/CountryContextProvider';

//Components
import Country from './shared/Country';

//Styles
import styles from './HomePage.module.css';

const HomePage = () => {
  const countriesData = useContext(CountryContext);
  return (
    <div className={styles.container}>
      {countriesData.map((country) => (
        <Country key={v4()} data={country} id={v4()} />
      ))}
    </div>
  );
};

export default HomePage;
