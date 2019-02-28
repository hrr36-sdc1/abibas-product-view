/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const fs = require('fs');
const path = require('path');
const { data } = require('../fakeData');

exports.constructCsvLine = (fields) => {
  const encodedFields = [];
  const separator = ',';
  for (let i = 0; i < fields.length; i += 1) {
    let field = `${fields[i]}`;

    if (field.includes('"')) field = `"${field.replace(/\"/g, '""')}"`; // replace single quotes with double quotes and enclose in quotes
    if (field.includes(separator)) field = `"${field}"`; // enclose in quotes when separator occurs in field
    if (field.includes('\n')) field = `"${field}"`; // enclose in quotes when newline occrus in field
    field = field.replace(/\n/g, '\r'); // seems to be parsed correctly as newline by Excel

    encodedFields.push(field);
  }
  return encodedFields.join(separator);
};

exports.generateProductData = (N) => {
  // generate random properties using faker
  const colors = [];
  const models = ['UltraBoost All Terrain Shoes'];
  const types = [];
  const sizes = [6.5, 7, 8, 9, 10, 12.5, 14, 16]
  for (let i = 0; i < 10; i += 1) {
    colors.push(faker.commerce.color());
    types.push(`${faker.commerce.productAdjective()} ${faker.commerce.product()}`);
    models.push(faker.commerce.productName());
  }

  const storage = [];

  let randFloor;
  for (let i = 0; i < N; i += 1) {
    randFloor = Math.floor(Math.random() * colors.length);
    storage.push({
      colors: colors[randFloor],
      type: types[randFloor],
      model: models[randFloor],
      sizes: [
        sizes[Math.floor(Math.random() * sizes.length)],
        sizes[Math.floor(Math.random() * sizes.length)],
        sizes[Math.floor(Math.random() * sizes.length)],
        sizes[Math.floor(Math.random() * sizes.length)],
      ],
      price: Math.round(100 * (Math.random() * 100 + 100)) / 100,
      image_id: (Math.floor(Math.random() * 1000000)) + 1000000,
      review_count: Math.floor(Math.random() * 130) + 20,
      avg_stars: Math.round(100 * (2 * Math.random() + 3)) / 100,
    });
  }
  return storage;
};

exports.generateProductFile = (N, n, ID) => {
  // N = number of records, n = number of files
  const dirname = path.resolve();
  for (let k = 0; k < n; k += 1) {
    const outputPath = path.join(dirname, `/seeds/file${ID}.csv`);
    const writeStream = fs.createWriteStream(outputPath, { encoding: 'utf8' });

    // write headers, generate products, and write those to file
    const headers = ['colors', 'type', 'model', 'sizes', 'price', 'image_id', 'review_count', 'avg_stars'];

    writeStream.write(`${exports.constructCsvLine(headers)}\n`);
    const storage = exports.generateProductData(N);
    for (let i = 0; i < (storage.length / n); i += 1) {
      const entry = storage[i];
      const line = [];
      // only get fields that we have in our headers:
      for (let j = 0; j < headers.length; j += 1) {
        const key = headers[j];
        let field = entry[key];
        if (field === undefined) field = '';
        line.push(field);
      }
      writeStream.write(`${exports.constructCsvLine(line)}\n`);
    }
  }
};
// THOUGHTS:
// Write a query to save 1 million different records in JSON format to disk
// Generate number from 1 - 1 million
// Read/Writestream to generate seedfile in csv format
// seed 10 million shoelinks, also update the shoelink possibility randomizer above
// put them in the bash gen and bash run seed scripts
// try writing a join query to gauge speed

exports.generateImageData = (N) => {
  const storage = [];
  for (let i = 0; i < N; i += 1) {
    const rand = 1 + Math.floor(Math.random() * 3);
    storage.push(data[`shoeLink${rand}`]);
  }
  return storage;
};

exports.generateImageFile = (N, n, ID) => {
  // N = number of records, n = number of files
  const dirname = path.resolve();
  for (let k = 0; k < n; k += 1) {
    const outputPath = path.join(dirname, `/seeds/imagefile${ID}.csv`);
    const writeStream = fs.createWriteStream(outputPath, { encoding: 'utf8' });

    // write headers, generate images, and write those to file
    const headers = ['links'];
    writeStream.write(`${exports.constructCsvLine(headers)}\n`);
    const storage = exports.generateImageData(N);
    for (let i = 0; i < (storage.length / n); i += 1) {
      const entry = storage[i].join('***');
      writeStream.write(`${entry}\n`);
    }
  }
};
