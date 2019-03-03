exports.up = (knex, Promise) => knex.schema.createTable('shoes', (table) => {
  table.integer('id').primary().notNullable();
  table.string('colors').notNullable();
  table.string('type').notNullable();
  table.string('model').notNullable().index('model_idx');
  table.string('sizes').notNullable();
  table.float('price', 5, 2).notNullable();
  table.integer('image_id').notNullable();
  table.integer('review_count').notNullable();
  table.float('avg_stars', 3, 2).notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTable('shoes');
