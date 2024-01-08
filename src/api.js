export let forecastData;

export async function fetchForecastData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=fec0c9bd8c574702b2f55333240701&q=${location}&days=7`,
      { mode: "cors" }
    );

    if (!response.ok) {
      if (response.status === 400) {
        console.log("Bad Request: Invalid location name");
      }
      console.log(`HTTP error! Status: ${response.status}`);
    }

    forecastData = await response.json();
    console.log(forecastData);
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

// if (forecastData.error) {
//     console.log('Error:', fetchedJsonData.error.message);
//   }