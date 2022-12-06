import React from 'react';

//Styles
import styles from './Navbar.module.css';

const Navbar = ({ btn, theme }) => {
  return (
    <div className={styles.navbarContainer}>
      <h1>Where in the world?</h1>
      <button className={styles.btn} onClick={btn}>
        {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default Navbar;
