exports.seed = function (knex) {
  return knex('recipe')
    .truncate()
    .then(function () {
      return knex('recipe').insert([
        {
          id: 1,
          RecipeName: 'Sicilian pizza',
          prepTime: '30 min',
          description: 'italian original pizza',
        },
        {
          id: 2,
          RecipeName: 'russian pizza',
          prepTime: '20 min',
          description: 'russian original pizza',
        },
        {
          id: 3,
          RecipeName: 'Mexican pizza',
          prepTime: '55 min',
          description: 'Mexican original pizza',
        },
        {
          id: 4,
          RecipeName: 'Chinese pizza',
          prepTime: '45 min',
          description: 'Chinese original pizza',
        },
        {
          id: 5,
          RecipeName: 'Chicago pizza',
          prepTime: '15 min',
          description: 'Chicago original pizza',
        },
        {
          id: 6,
          RecipeName: 'New York pizza',
          prepTime: '20 min',
          description: 'New York original pizza',
        },
        {
          id: 7,
          RecipeName: 'Japanese pizza',
          prepTime: '35 min',
          description: 'Japanese original pizza',
        },
        {
          id: 8,
          RecipeName: 'Mcds pizza',
          prepTime: '5 min',
          description: 'Fast original pizza',
        },
        {
          id: 9,
          RecipeName: 'Wendys pizza',
          prepTime: '10 min',
          description: 'somewhat-fast original pizza',
        },
      ]);
    });
};