import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
  const location = useLocation();
  const countryData = location.state;

  return (
    <div className="details-wrapper">
      <img className="card-flag" src={countryData.flags.png} alt={`${countryData.name.common}'s flag`} />
      <h1>{countryData.name.common}</h1>
      <h2>{`Official name: ${countryData.name.official}`}</h2>
      {countryData.capital.map(capital => (
        <h2 key={capital}>{`Capital: ${capital}`}</h2>
      ))}
      <h2>{`Region: ${countryData.region}`}</h2>
      <h2>{`Subegion: ${countryData.subregion}`}</h2>
      <h2>{`Population: ${countryData.population} people`}</h2>

      {!!countryData.unMember && (
        <div>United Nations Member</div>
      )}
    </div>
  )
}

export default CountryDetails;
