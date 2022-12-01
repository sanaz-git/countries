import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';

//Styles
import styles from './Filter.module.css';

//Context
import { CountryContext } from '../../context/CountryContextProvider';

//Components
import Country from './Country';

const Filter = () => {
  const data = useContext(CountryContext);
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchData = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  console.log(`search : ${searchData}`);

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search a country .."
          value={search}
          onChange={searchHandler}
        />

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
      <div className={styles.countryContainer}>
        {searchData.map((item) => (
          <Country key={v4()} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
