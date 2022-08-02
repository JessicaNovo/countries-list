import { useLocation } from 'react-router-dom';
import BorderCard from './components/BorderCard';
import './CountryDetails.css';

const CountryDetails = () => {
  const location = useLocation();
  const countryData = location.state;

  const borders = countryData.borders;

  return (
    <div className="details-wrapper">
      <img className="details-flag" src={countryData.flags.png} alt={`${countryData.name.common}'s flag`} />
      <h1 className="details-title">{countryData.name.common}</h1>
      <div className="details-items">
        <span>Official name:</span>{' '}{countryData.name.official}
      </div>
      {countryData.capital.map(capital => (
        <div className="details-items" key={capital}>
          <span>Capital:</span>{' '}{capital}
        </div>
      ))}
      <div className="details-items">
        <span>Region:</span>{' '}{countryData.region}
      </div>
      <div className="details-items">
        <span>Subregion:</span>{' '}{countryData.subregion}
      </div>
      <div className="details-items">
        <span>Population:</span>{' '}{`${countryData.population} people`}
      </div>

      {!!countryData.unMember && (
        <div className="details-items--member">United Nations Member</div>
      )}

      <h2 className="borders-title">Borders:</h2>
      <div className="borders-list">
        {borders.map((border, index) => 
          <BorderCard borderCountry={border} index={index} />
        )}
      </div>
    </div>
  )
}

export default CountryDetails;
