import Home from './Home';
import CountryDetails from './CountryDetails';
import { Routes, Route } from "react-router-dom";
import './App.css';

const App = () => (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </main>
)

export default App;
