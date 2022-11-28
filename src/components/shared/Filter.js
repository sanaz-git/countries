import React, { useContext, useState } from 'react';

//Styles
import styles from './Filter.module.css';

//Context
import { CountryContext } from '../../context/CountryContextProvider';

const Filter = () => {
  const data = useContext(CountryContext);
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Search a country .."
          value={search}
          onChange={searchHandler}
        />
      </div>
      <div>
        <select name="country">
          <option value="Filter by region">Filter by region</option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
