import React, { useEffect, useState } from 'react';

//Styles
import styles from './Filter.module.css';

//Components
import Country from './Country';
import { getCountries } from '../../services/api';

const Filter = () => {
  const [countries, setCountries] = useState([]);

  const regions = [
    { name: 'All' },
    { name: 'Europe' },
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Oceania' },
    { name: 'Americas' },
    { name: 'Antarctic' },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await getCountries());
    };
    fetchAPI();
  }, []);

  const filterByRegion = async (region) => {
    if (region === '') return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    await setCountries(data);
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === '') return;
    const res = await fetch(`https://restcountries.com/v3.1//name/${term}`);
    const data = await res.json();
    await console.log(data);
    await setCountries(data);
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search a country .."
          // value={countries}
          onChange={(term) => searchCountry(term.target.value)}
        />

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
