/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const fs = require('fs');

console.time('datagen');

const { N } = process.env;
let i = 0;
const writeStream = fs.createWriteStream('./database/utils/seeds/productfile.csv');

writeStream.write('colors,type,model,sizes,price,image_id,review_count,avg_stars\n');

function writeRecords() {
  while (i < N) {
  // generate random properties using faker
    const colors = [faker.commerce.color(), faker.commerce.color(), faker.commerce.color()].join(",");
    const models = faker.commerce.productName();
    const typeOf = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
    const sizeChart = [6.5, 7, 8, 9, 10, 12.5, 14, 16];
    const sizes = [
      sizeChart[Math.floor(Math.random() * sizeChart.length)],
      sizeChart[Math.floor(Math.random() * sizeChart.length)],
      sizeChart[Math.floor(Math.random() * sizeChart.length)],
      sizeChart[Math.floor(Math.random() * sizeChart.length)],
    ].join(",");
    const price = Math.round(100 * (Math.random() * 100 + 100)) / 100;
    const image_id = (Math.floor(Math.random() * 1000000)) + 1000000;
    const review_count = Math.floor(Math.random() * 130) + 20;
    const avg_stars = Math.round(100 * (2 * Math.random() + 3)) / 100;

    const str = `"${colors}",${models},${typeOf},"${sizes}",${price},${image_id},${review_count},${avg_stars}\n`;

    if (!writeStream.write(str)) {
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
