import {useEffect, useState} from 'react';
import CountryCard from './components/CountryCard';
import './Home.css';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState('');
  const [searchedRegion, setSearchedRegion] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const getCountries = async (endpoint) => {
    await fetch(`https://restcountries.com/v3.1/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchedRegion('');
    getCountries(`name/${searchedCountry}`);
  }

   const handleFilter = (event) => {
    event.preventDefault();
    setSearchedCountry('');
    getCountries(`region/${searchedRegion}`);
  }

  useEffect(() => {
    getCountries('all');
    setLoading(false);
  }, []);
   
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1 className="homepage-title">Countries</h1>
        <div className="homepage-form__wrapper">
          <form className="homepage-form--search" onSubmit={handleSearch}>
            <label className="homepage-form__label">
              Search by country name:
              <input type="text" value={searchedCountry} onChange={event => setSearchedCountry(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <form className="homepage-form--filter" onSubmit={handleFilter}>
            <label className="homepage-form__label">Filter by region:</label>
            {regions.map((region) => (
              <label key={region}>
                {region}
                <input type="radio" name="region" value={region} onChange={event => setSearchedRegion(event.target.value)} />
              </label>
            ))}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      {!!loading  && (
        <div>Loading...</div>
      )}
      {!!error && (
        <div>{error}</div>
      )}
      <div className="countries-list">
        {countries.length > 0 && countries.map((each) => 
          <CountryCard countryData={each} />
        )}
      </div>
    </div>
  );
};

export default Home;
