const KEY_API = "c2e2900ccf69f77b9628a209c66cd436";
export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&lang=ru&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
