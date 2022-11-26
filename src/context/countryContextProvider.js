import React, { useState, useEffect, createContext } from 'react';

//Api
import { getCountries } from '../services/api';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await getCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <CountryContext.Provider value={countries}>
        {children}
      </CountryContext.Provider>
    </div>
  );
};

export default CountryContextProvider;
