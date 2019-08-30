exports.seed = function (knex) {
  return knex('chefs')
    .truncate()
    .then(function () {
      return knex('chefs').insert([
        {
          id: 1,
          FirstNameLastName: 'Carl Johnson',
          yearsexp: 10,
          relocate: true,
          location: 'Las Vegas',
          state: 'Nevada',
          contactpref: 'email',
          telephone: '627-5309',
          email: '200mk@example',
          public: true,
          users_id: 1,
        },
        {
          id: 2,
          FirstNameLastName: 'Sascha FirstNameLastName',
          yearsexp: 3,
          relocate: false,
          location: 'Kansas City',
          state: 'Missouri',
          contactpref: 'phone',
          telephone: '627-5309',
          email: '300mk@example',
          public: true,
          users_id: 2,
        },
        {
          id: 3,
          FirstNameLastName: 'Lukas Miller',
          yearsexp: 3,
          relocate: true,
          location: 'New York City',
          state: 'New York',
          contactpref: 'email',
          telephone: '627-5309',
          email: '400mk@example',
          public: true,
          users_id: 3,
        },
      ]);
    });
};