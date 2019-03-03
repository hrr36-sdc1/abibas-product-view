exports.up = (knex, Promise) => knex.schema.createTable('images', (table) => {
  table.integer('id').primary().notNullable();
  table.text('links').notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTable('images');
