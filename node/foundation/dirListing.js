const { readdir, readFile, stat } = require('fs').promises;

async function readFilesDirs() {
  const list = await readdir('./projects');
  console.log(list);
  for (const file of list) {
    const fileStat = (await stat(`./projects/${file}`)).isDirectory();
    if (!fileStat) {
      const fileRead = await readFile(`./projects/${file}`, 'utf8');
      console.log(fileRead);
    } else {
      console.log(file);
      const subList = await readdir(`./projects/${file}`);
      for (const subFile of subList) {
        const subFileStat = (await stat(`./projects/${file}/${subFile}`)).isDirectory();
        if (!subFileStat) {
          const subFileRead = await readFile(`./projects/${file}/${subFile}`, 'utf8');
          console.log(subFileRead);
        } else {
          console.log(subFile);
        }
      }
    }
  }
}
readFilesDirs();
