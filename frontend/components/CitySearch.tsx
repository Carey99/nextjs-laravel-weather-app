import * as React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { fetchWeather } from '../utils/api';

export default function CitySearch() {
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeather(selectedCity);
    setWeather(data);
  };

  return (
    <div>
      <SearchBar onSelect={setSelectedCity} />
      <button onClick={handleSearch}>Search</button>
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
