import * as React from 'react';
export default function WeatherCard({ data }) {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(`${data.city}: ${data.temperature}°C, ${data.condition}, ${data.humidity}%`);
    };
  
    return (
      <div>
        <h2>{data.city}</h2>
        <p>Temperature: {data.temperature}°C</p>
        <p>Condition: {data.condition}</p>
        <p>Humidity: {data.humidity}%</p>
        <button onClick={copyToClipboard}>📋 Copy</button>
      </div>
    );
  }
  