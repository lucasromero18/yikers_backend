
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('solution_rating').del()
    .then(function () {
      // Inserts seed entries
      return knex('solution_rating').insert([
        {situation_id:  1, rating: 10},
        {situation_id:  2, rating: 9},
        {situation_id:  3, rating: 8},
        {situation_id:  4, rating: 9},
        {situation_id:  5, rating: 8},
        {situation_id:  6, rating: 9},
        {situation_id:  7, rating: 8},
        {situation_id:  8, rating: 10},
        {situation_id:  9, rating: 10},
        {situation_id:  10, rating: 10},
        {situation_id:  11, rating: 9},
        {situation_id:  12, rating: 8},
        {situation_id:  13, rating: 6},
        {situation_id:  14, rating: 10},
        {situation_id:  15, rating: 7},
      ]);
    });
};
