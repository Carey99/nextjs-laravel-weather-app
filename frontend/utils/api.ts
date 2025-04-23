export const fetchCities = async (query: string) => {
    const res = await fetch(`http://localhost:8000/api/cities?q=${query}`);
    return res.json();
  };
  
  export const fetchWeather = async (city: string) => {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
    return res.json();
  };
  