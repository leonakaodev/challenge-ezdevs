exports.up = function(knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id')
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('image').nullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now())
  });
};
    
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};