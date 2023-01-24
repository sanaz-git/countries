import React, { useContext } from 'react';

//Styles
import styles from './Filter.module.css';

//Components
import Country from './Country';

//context
import { CountryContext } from '../../context/countryContextProvider';

const Filter = () => {
  const [countries, setCountries] = useContext(CountryContext);

  const filterByRegion = async (region) => {
    if (region === 'all') {
      const url = `https://restcountries.com/v3.1/all`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } else {
      const url = `https://restcountries.com/v3.1/region/${region}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }
  };

  const searchCountry = async (term) => {
    if (term.length < 2 || term === '') return;
    const res = await fetch(`https://restcountries.com/v3.1//name/${term}`);
    const data = await res.json();
    await console.log(data);
    await setCountries(data);
  };

  const sortByPopulation = () => {
    const copyCountries = [...countries];
    copyCountries.sort((a, b) => {
      return b.population - a.population;
    });
    setCountries(copyCountries);
  };
  const sortByName = () => {
    const copyCountries = [...countries];
    copyCountries.sort((a, b) => {
      const nameA = a.name.common;
      const nameB = b.name.common;
      return nameA.localeCompare(nameB);
    });
    setCountries(copyCountries);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <i className="fa fa-search"></i>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search a country .."
          onChange={(term) => searchCountry(term.target.value)}
        />

        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByPopulation}>Sort By Population</button>

        <select
          name="filter_by_region"
          id="filter_by_region"
          onChange={(e) => filterByRegion(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={styles.countryContainer}>
        {countries.map((item) => (
          <Country key={item.name.common} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
