exports.seed = (knex, Promise) => knex('shoes').del()
  .then(() => knex('shoes').insert({
    colors: 'Grey, Grey, Grey',
    type: 'Men\'s Running',
    model: 'UltraBoost All Terrain Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 10, 14, 14.5, 16',
    price: 180.00,
    image_id: 1,
    review_count: 1200,
    avg_stars: 4.75,
  }))
  .then(() => knex('shoes').insert({
    colors: 'Night Red, Noble Maroon, Bright Blue',
    type: 'Men\'s Running',
    model: 'UltraBoost All Terrain Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5, 10, 14, 14.5',
    price: 180.00,
    image_id: 2,
    avg_stars: 4.1,
    review_count: 320,
  }))
  .then(() => knex('shoes').insert({
    colors: 'Chalk White, Cloud White, Grey',
    type: 'Men\'s Running',
    model: 'UltraBoost All Terrain Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 180.00,
    image_id: 3,
    avg_stars: 4.7,
    review_count: 150,
  }));
