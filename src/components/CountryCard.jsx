import { Link } from "react-router-dom";
import './Cards.css';

const CountryCard = ({countryData}) => {
  const name = countryData.name.common;
  const nameLowerCase = countryData.name.common.toLowerCase();

  return (
    <Link to={`/country/${nameLowerCase}`} state={ countryData } key={nameLowerCase} className="card-wrapper">
      <div className="card-header">
        <img className="card-flag" src={countryData.flags.png} alt={`${name}'s flag`} />
        <h2 className="card-title">{name}</h2>
      </div>
    </Link>
  )
}

export default CountryCard;
