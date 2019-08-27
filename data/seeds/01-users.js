exports.seed = function (knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        { id: 1, name: 'Carl', password: 'mutumbo' },
        { id: 2, name: 'Sascha', password: 'howcanidothis'},
        { id: 3, name: 'Lukas', password: '12345' }
      ]);
    });
};