
exports.up = function(knex, Promise) {
  return knex.schema.createTable('situations', (table) => {
        table.increments();
        table.integer('user_id')
             .references('id')
             .inTable('users')
             .onDelete('CASCADE')
             .notNullable()
             .index();
        table.integer('category_id')
             .references('id')
             .inTable('categories')
             .onDelete('CASCADE')
             .notNullable()
             .index();
        table.string('title');
        table.text('situation');
        table.text('solution')
        table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('situations')
};
