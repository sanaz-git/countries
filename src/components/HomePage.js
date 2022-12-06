import React from 'react';

//Context
import Filter from './shared/Filter';

//Styles
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Filter />
    </div>
  );
};

export default HomePage;
