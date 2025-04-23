import * as React from 'react';
import { useState, useEffect } from 'react';
import { fetchCities } from '../utils/api';

export default function SearchBar({ onSelect }: { onSelect: (city: string) => void }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);

  useEffect(() => {
    if (query.length > 0) {
      fetchCities(query).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search city..." />
      {suggestions.map((city, idx) => (
        <div key={idx} onClick={() => onSelect(city.name)}>{city.name}</div>
      ))}
    </div>
  );
}
