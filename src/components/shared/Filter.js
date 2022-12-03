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
  const [filter, setFilter] = useState([]);
  const [test, setTest] = useState([]);

  const regions = [
    { name: 'All' },
    { name: 'Europe' },
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Oceania' },
    { name: 'Americas' },
    { name: 'Antarctic' },
  ];

  //search
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchData = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  //filter
  async function filterByRegion(region) {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`,
      );
      const regionData = await response.json();
      setFilter(regionData);
      console.log(regionData);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

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
        <form onSubmit={handleFilterByRegion}>
          <select
            name="filter_by_region"
            id="filter_by_region"
            value={regions.name}
            onChange={(e) => filterByRegion(e.target.value)}
          >
            {regions.map((region, index) => (
              <option key={index} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </form>
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
