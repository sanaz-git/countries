import React, { useContext, useState } from 'react';
// import { v4 } from 'uuid';

//Styles
import styles from './Filter.module.css';

//Context
import { CountryContext } from '../../context/CountryContextProvider';

//Components
import Country from './Country';

const Filter = () => {
  const data = useContext(CountryContext);
  const [search, setSearch] = useState('');
  const regions = [
    { name: 'Europe' },
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Oceania' },
    { name: 'Americas' },
    { name: 'Antarctic' },
  ];

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchData = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search a country .."
          value={search}
          onChange={searchHandler}
        />

        <select name="filter_by_region" id="filter_by_region">
          {regions.map((region, index) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.countryContainer}>
        {searchData.map((item) => (
          <Country key={item.name.common} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
