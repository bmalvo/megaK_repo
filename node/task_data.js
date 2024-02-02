const { readFile, writeFile } = require('fs').promises;

const data = [1, 2, 7, 20, 56, 22];

(async () => {
  try {
    writeFile('./data/input1.json', JSON.stringify(data), 'utf8');
  } catch (err) {
    console.log(err);
  }
})();

(async () => {
  try {
    const dataRead = await readFile('./data/input1.json', 'utf8');
    const dataArray = JSON.parse(dataRead);
    console.log(dataArray);
    let sum = 0;
    for (const num of dataArray) {
      sum += num;
    }
    console.log(sum);
    try {
      await writeFile('./data/sum.txt', sum.toString(), 'utf8');
      console.log('all good!');
    } catch (err) {
      console.log('fail: ', err);
    }
  } catch (err) {
    console.log('fail: ', err);
  }
})();
