# 🌦️ Next.js + Laravel Weather App

This is a decoupled weather application built as part of a pre-screening assessment. The project features a **Next.js** frontend and a **Laravel** backend, using the **OpenWeatherMap API** to fetch and display real-time weather data.

## 🛠️ Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Laravel (PHP)
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

## 🔧 Features

- Search for weather by city name
- View current temperature, conditions, and location
- Responsive design following provided wireframes
- Clean separation between frontend and backend

## 🚀 Getting Started

### Backend (Laravel)

1. Clone the repo:
   ```bash
   git clone https://github.com/Carey99/nextjs-laravel-weather-app.git
   cd nextjs-laravel-weather-app/backend

##
- User types in input → SearchBar hits 
 ```bash
 GET /api/cities?q=...
```
- Suggestion shown → user selects one
- User clicks Search → frontend sends
```
GET /api/weather?city=...
```
- Laravel fetches weather → responds → fronend shoes WeatherCard