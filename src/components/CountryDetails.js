import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Context
import { CountryContext } from '../context/CountryContextProvider';

const CountryDetails = () => {
  const params = useParams();
  console.log(params);
  // const dataDetails = useContext(CountryContext);
  // const countryData = dataDetails;
  // console.log(countryData);
  // const { region, capital } = countryData;
  return (
    <div>
      {/* <p>{region}</p>
      <p>{capital}</p> */}
      <h1>details</h1>
      <Link to="/countries">back</Link>
    </div>
  );
};

export default CountryDetails;
