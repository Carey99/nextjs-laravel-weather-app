use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\CityController;

Route::get('/cities', [CityController::class, 'searchCities']);
Route::get('/weather', [WeatherController::class, 'getWeather']);
