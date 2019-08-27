exports.seed = function (knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'Carl', password: 'mutumbo' },
        { id: 2, username: 'Sascha', password: 'howcanidothis'},
        { id: 3, username: 'Lukas', password: '12345' }
      ]);
    });
};