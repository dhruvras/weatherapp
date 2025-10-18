
import fetchcood from "./cood.js";

const getWeatherCondition = (code) => {
  const conditions = {
    0: "Clear sky ☀️",
    1: "Mainly clear 🌤",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫",
    48: "Depositing rime fog 🌫",
    51: "Light drizzle 🌦",
    53: "Moderate drizzle 🌧",
    55: "Dense drizzle 🌧",
    61: "Slight rain 🌦",
    63: "Moderate rain 🌧",
    65: "Heavy rain 🌧🌧",
    71: "Slight snow 🌨",
    73: "Moderate snow 🌨",
    75: "Heavy snow ❄️",
    95: "Thunderstorm ⛈",
  };

  return conditions[code] || "Unknown weather condition";
};

const getWeatherData = async (city) => {
  const coods = await fetchcood(city);
  if (coods){
    const { latitude, longitude } = coods;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,uv_index&timezone=auto`
    );
    const data = await response.json();
    // console.log("Full Weather Data:", data);
    // console.log(`\n\ntemperature: ${data.current.temperature_2m}°C`);
    // console.log(`humidity: ${data.current.relative_humidity_2m}%`);
    // console.log(`precipitation: ${data.current.precipitation} mm`);
    // console.log(`UV Index: ${data.current.uv_index}`);
    // console.log(`Condition: ${getWeatherCondition(data.current.weather_code)}`);

    return { 
      temp : data.current.temperature_2m,
      humidity : data.current.relative_humidity_2m,
      precipitation : data.current.precipitation,
      uv_index : data.current.uv_index,
      condition: getWeatherCondition(data.current.weather_code ),
      location : city
    } 
  }
    else{
      console.log("Could not fetch coordinates for the city.");
      return null;
    }
  
};


// getWeatherData("New Tehri");

export default getWeatherData;