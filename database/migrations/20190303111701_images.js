exports.up = (knex, Promise) => knex.schema.createTable('images', (table) => {
  table.increments('id');
  table.text('links').notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTable('images');
