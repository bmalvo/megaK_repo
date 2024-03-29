const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

const getDataFileName = (city) => safeJoin('./data/', `${city}.txt`);

const WeatherData = async (data, cityName) => {
  const foundData = data.find((stationData) => stationData.stacja === cityName);

  // return foundData ? console.log(foundData) : console.log('Wrong City name');
  if (!foundData) {
    throw new Error('Wrong City name.');
  }
  // console.log(foundData);

  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = foundData;
  const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa`;
  console.log(weatherInfo);

  const dateTimeString = new Date().toLocaleString();

  await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n--\n`);
};

const checkCityWeather = async (cityName) => {
  try {
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await WeatherData(data, cityName);
  } catch (er) {
    console.log('error has occured!', er);
  }
};

checkCityWeather(process.argv[2]);
