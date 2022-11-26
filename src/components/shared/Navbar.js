import React from 'react';

//Styles
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>Where in the world?</h1>
      <h2>Dark Mode</h2>
    </div>
  );
};

export default Navbar;
