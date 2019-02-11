
exports.up = function(knex, Promise) {
  return knex.schema.createTable('solution_rating', (table) => {
      table.increments();
      table.integer('situation_id')
           .references('id')
           .inTable('situations')
           .onDelete('CASCADE')
           .notNullable()
           .index();
      table.integer('rating')
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('solution_rating')
};
