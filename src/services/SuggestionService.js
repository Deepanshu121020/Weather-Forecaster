const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c"; // Replace with your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5"; // Replace with your actual API base URL

const getCitySuggestions = async (query) => {
  const url = `${BASE_URL}/find?q=${query}&type=like&sort=population&cnt=5&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data && data.list) {
    return data.list.map(city => city.name);
  }

  return [];
};

export default getCitySuggestions;
