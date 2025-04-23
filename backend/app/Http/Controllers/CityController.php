<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CityController extends Controller
{
    public function searchCities(Request $request)
    {
        $q = strtolower($request->query('q'));
        $json = json_decode(file_get_contents(storage_path('app/city.list.json')), true);

        $results = array_filter($json, function ($city) use ($q) {
            return str_starts_with(strtolower($city['name']), $q);
        });

        return response()->json(array_values(array_slice($results, 0, 10))); // Top 10 matches
    }
}
