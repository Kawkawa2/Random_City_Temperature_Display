const cities = [
  { id: 1, name: "New York", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "London", lat: 51.5074, lng: -0.1278 },
  { id: 3, name: "Paris", lat: 48.8566, lng: 2.3522 },
  { id: 4, name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { id: 5, name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { id: 6, name: "Rome", lat: 41.9028, lng: 12.4964 },
  { id: 7, name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { id: 8, name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { id: 9, name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { id: 10, name: "Rabat", lat: 34.0209, lng: -6.8416 },
];
const randomCity = () => {
  return Math.floor(Math.random() * cities.length) + 1;
};
// console.log(cities[randomCity()]);
async function displayTemp(cityIndex) {
  try {
    let latitude = cities[cityIndex].lat;
    let longitude = cities[cityIndex].lng;
    let cityName = cities[cityIndex].name;

    // const response = await fetch(
    //   `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    // );

    const response = await fetch(
      `    https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=733e5f5dc03d7ee328041f754a0508dc&units=metric`
    );
    const jsonData = await response.json();
    console.log("Data fetched successfully:", jsonData);
    console.log(`city name: ${cityName}`);
    for (let i = 0; i < jsonData.list.length; i++) {
      let dateTimeString = jsonData.list[i].dt_txt;
      let dateTime = new Date(dateTimeString);
      let hour = dateTime.getHours();
      console.log(
        `temperature: ${jsonData.list[i].main.temp} \n hour: ${hour} \n description: ${jsonData.list[i].weather[0].description} \n icon: ${jsonData.list[i].weather[0].icon} \n`
      );
    }
  } catch (Err) {
    console.log("Error:", Err.message);
  }
}
let city = randomCity();

displayTemp(city);
