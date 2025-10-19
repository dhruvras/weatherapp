import fetchcood from "./cood.js";

const get7DayForecast = async (city) => {
  try {
    const coods = await fetchcood(city);
    const { latitude, longitude } = coods;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,weathercode&timezone=auto`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.daily) {
      console.error("No 'daily' data found in response");
      // console.log("Raw response:", data); // 👈 log full API response for debugging
      return null;
    }

    // console.log("✅ 7 Day Forecast Data:", data.daily);
    return data.daily;
  } catch (error) {
    console.error("Error fetching 7-day forecast:", error);
  }
};


// console.log(get7DayForecast(37.7749, -122.4194).then(data => (console.log(data))).catch((error) => (console.log("error")))) ; // Example usage
export default get7DayForecast;