const fetch = require('node-fetch');

const cityName = process.argv[2];

const WeatherData = (data) => {
  const foundData = data.find((stationData) => stationData.stacja === cityName);

  // return foundData ? console.log(foundData) : console.log('Wrong City name');
  if (!foundData) {
    console.log('Wrong City name.');
  }
  // console.log(foundData);

  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = foundData;
  const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa`;
  console.log(weatherInfo);
};

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then((r) => r.json())
  .then(WeatherData);
