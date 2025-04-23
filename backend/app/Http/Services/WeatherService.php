<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    public function getWeatherByCity($city)
    {
        $apiKey = env('OPENWEATHER_API_KEY');
        $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric'
        ]);

        if ($response->successful()) {
            $data = $response->json();
            return [
                'city' => $data['name'],
                'temperature' => $data['main']['temp'],
                'condition' => $data['weather'][0]['main'],
                'humidity' => $data['main']['humidity']
            ];
        }

        return ['error' => 'City not found'];
    }
}
