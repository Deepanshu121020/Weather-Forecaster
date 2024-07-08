import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from './components/TempratureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TemperatureChart from './components/TempratureChart';

function AppContent() {
  const [query, setQuery] = useState({ q: "singapore" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location';

      toast.info('Fetching weather for ' + message);

      await getFormattedWeatherData({ ...query, units }).then(data => {
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);

        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-10 sm:px-20 md:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} />
          <Forecast title={"Hourly Forecast"} items={weather.hourly} />
          <Forecast title={"Daily Forecast"} items={weather.daily} />
        
        
          <TemperatureChart daily={weather.daily} /> {/* Add the TemperatureChart component */}
        
        </div>
      )}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default AppContent;