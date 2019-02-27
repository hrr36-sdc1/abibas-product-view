const helpers = require('./helpers');

/*
PRODUCTS:

id: assigned by db
colors: 'Grey, Grey, Grey', 'Night Red, Noble Maroon, Bright Blue'
type: 'Men's Running'
model: 'UltraBoost All Terrain Shoes'
sizes: '6, 6.5, 7, 8, 8.5, 10, 14, 14.5, 16'
price:        FLOAT   random  100.00 - 200.00
image_ID:     INT     random  1 - 3
review_count: INT     random  20 - 150
avg_stars:    FLOAT   random  3.00 - 5.00

colors: faker.commerce.color()
type: faker.commerce.productAdjective() + faker.commerce.product();
model: faker.commerce.productName(), 'UltraBoost All Terrain Shoes'
sizes: [6, 6.5, 7, 8, 8.5, 10, 14, 14.5, 16]
image_ID: Math.floor(Math.random() * 3) + 1
review_count: Math.floor(Math.random() * 130) + 20
avg_stars: 2 * Math.random() + 3
*/

/*
* PRODUCTS
*/
console.time('datagen');

const N = 1000000;
const n = 1;
helpers.generateProductFile(N, n, process.env.ID);

/*
* IMAGE LINKS
*/

console.timeEnd('datagen');
