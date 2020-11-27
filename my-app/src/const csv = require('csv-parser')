const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('master_catalog_20201110_1252.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
});

