import React, { createContext, useEffect, useState } from 'react';

//Api
import { getCountries } from '../services/api';

export const countryContext = createContext();

const countryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await getCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <countryContext.Provider value={countries}>
        {children}
      </countryContext.Provider>
    </div>
  );
};

export default countryContextProvider;
