
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'dexterouscedar', email: 'dexterouscedar@yahoo.com', age: 25, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'pingalkene', email: 'pigalkene@yahoo.com', age: 33, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'yardbadsey', email: 'yardbadsey@yahoo.com', age: 19, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'verballyking', email: 'verballyking@yahoo.com', age: 40, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'dindyzippy', email: 'dindyzippy@yahoo.com', age: 33, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'jagfrogs', email: 'jagfrogs@yahoo.com', age: 46, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'spencerbluestone', email: 'spencerbluestone@yahoo.com', age: 32, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'comevenice', email: 'comevenice@yahoo.com', age: 20, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'shalemilan', email: 'shalemilan@yahoo.com', age: 39, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'dimpleddisorder', email: 'dimpledisorder@yahoo.com', age: 36, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'seriesspoof', email: 'seriesspoof@yahoo.com', age: 41, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'grapnelgains', email: 'grapnelgains@yahoo.com', age: 53, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'crowgrants', email: 'cowgrants@yahoo.com', age: 22, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'hactcheryborgie', email: 'hatcheryborgie@yahoo.com', age: 28, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'},
        {username: 'issuejiggle', email: 'issuejiggle@yahoo.com', age: 33, password: '123', image: 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'}
      ]);
    });
};
