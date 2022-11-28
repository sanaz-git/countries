import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const params = useParams();

  // useEffect(() => {
  //   const fetchCountryData = async () => {
  //     const response = await fetch('https://restcountries.com/v3.1/all/params');
  //     const country = await response.json();
  //     setCountry(country);
  //   };

  //   fetchCountryData();
  // }, [params]);

  return (
    <div>
      <h1>details:{params.id}</h1>
      <p>region:</p>
      <Link to="/countries">back</Link>
    </div>
  );
};

export default CountryDetails;
