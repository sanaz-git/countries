import React, { useContext } from 'react';

//Context
import { CountryContext } from '../context/CountryContextProvider';
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
    </>
  );
};

export default HomePage;
