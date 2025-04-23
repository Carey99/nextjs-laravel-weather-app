<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\WeatherService;

class WeatherController extends Controller
{
    public function getWeather(Request $request, WeatherService $service)
    {
        $city = $request->query('city');
        return response()->json($service->getWeatherByCity($city));
    }
}
