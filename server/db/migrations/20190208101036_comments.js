
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
        table.increments();
        table.integer('user_id')
             .references('id')
             .inTable('users')
             .onDelete('CASCADE')
             .notNullable()
             .index();
        table.integer('situation_id')
             .references('id')
             .inTable('situations')
             .onDelete('CASCADE')
             .notNullable()
             .index();
        table.text('comment');
        table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
