import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './Cards.css';

const BorderCard = ({borderCountry, index}) => {

  const [borderData, setBorderData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${borderCountry.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => setBorderData(data[0]))
       .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, [borderCountry]);

  if (!!borderData){
    return (
      <Link to={`/country/${borderData.name.common.toLowerCase()}`} state={ borderData } key={borderData.fifa} className="card-wrapper">
        <div className="card-header">
          <img className="card-flag" src={borderData.flags.png} alt={`${ borderData.name.common}'s flag`} />
          <h2 className="card-title">{ borderData.name.common}</h2>
        </div>
      </Link>
    )
  }

  return (
    <div key={`error-${index}`}>{error}</div>
  );
}

export default BorderCard;
