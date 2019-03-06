/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const { data } = require('../fakeData');

console.time('datagen');

const { N } = process.env;
let i = 0;
const writeStream = fs.createWriteStream('./database/utils/seeds/imagefile.csv');

writeStream.write('links\n');

function writeRecords() {
  while (i < N) {
    const rand = 1 + Math.floor(Math.random() * 8);
    const link = `${data[`shoeLink${rand}`].join('***')}\n`;
    if (!writeStream.write(link)) {
      return;
    }
    i += 1;
  }
  writeStream.end();
}

writeStream.on('finish', () => {
  console.timeEnd('datagen');
  process.exit(0);
});

writeStream.on('drain', () => {
  writeRecords();
});

writeRecords();
