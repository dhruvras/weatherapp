const get7DayForecast = async (latitude, longitude) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,uv_index_max&timezone=auto`;
    
    const response = await fetch(url);
    const data = await response.json();

    // console.log("Raw API Data:", data);

    if (!data.daily) {
      console.error("No 'daily' data found in response");
      return null;
    }

    return data.daily;
  } catch (error) {
    console.error("Error fetching 7-day forecast:", error);
  }
};

export default get7DayForecast;