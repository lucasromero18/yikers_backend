
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category: 'Home'},
        {category: 'School'},
        {category: 'Work'},
        {category: 'Relationships'},
        {category: 'Movies'},
        {category: 'Music'},
        {category: 'Sports'},
        {category: 'Animals'},
        {category: 'Outdoors'},
        {category: 'Exercise/Health'},
        {category: 'Food'},
        {category: 'Finance'},
        {category: 'Family'},
        {category: 'Travel'},
        {category: 'Unexpected'}
        ]);
    });
};
