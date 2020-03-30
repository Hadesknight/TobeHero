exports.up = function (knex) {
  return knex.schema.createTable('collabs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password_hash').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('collabs');
};
