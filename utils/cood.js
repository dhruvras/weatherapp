async function fetchcood(cityName) {
  const API_coordinates = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
  try {
    const response = await fetch(API_coordinates);
    const json = await response.json();

    if (json.results && json.results.length > 0) {
      const city = json.results[0]; 
      // console.log(city)

      return { latitude: city.latitude, longitude: city.longitude };

    } else {
      console.log("No results found for that city name.");
    }

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// let data = await fetchcood("New York")

export default fetchcood;

// Example usage (async context):
// const data = await fetchcood("New York");
// console.log(data.latitude, data.longitude);
// console.log(data.latitude, data.longitude);