const helpers = require('./helpers');

console.time('datagen');

const N = process.env.N;
const n = process.env.ID;
helpers.generateImageFile(N, n, process.env.ID);

console.timeEnd('datagen');
