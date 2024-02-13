const fetch = require('node-fetch');

const WeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => (b.temperatura - a.temperatura));

  //   const {
  //     stacja: station,
  //     temperatura: temperature,
  //   } = sorted;

  sorted.forEach((el) => {
    console.log(`Miasto ${el.stacja} : ${el.temperatura}`);
  });
  console.log(`Najcieplejsze miasto: ${sorted[0].stacja}: ${sorted[0].temperatura}
  Najzimniejsze miasto: ${sorted[sorted.length - 1].stacja}: ${sorted[sorted.length - 1].temperatura}`);
};

const findWarmestPlaceInPoland = async () => {
  try {
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await WeatherData(data);
  } catch (er) {
    console.log('error has occured!', er);
  }
};

findWarmestPlaceInPoland();
