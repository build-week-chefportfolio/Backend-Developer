exports.seed = function(knex) {
  return knex('chefs_recipe').del()
    .then(function () {
      return knex('chefs_recipe').insert([
        {id: 1, chefs_id: 1, recipe_id: 1},
        {id: 2, chefs_id: 1, recipe_id: 2},
        {id: 3, chefs_id: 1, recipe_id: 3},
        {id: 4, chefs_id: 2, recipe_id: 4},
        {id: 5, chefs_id: 2, recipe_id: 5},
        {id: 6, chefs_id: 2, recipe_id: 6},
        {id: 7, chefs_id: 3, recipe_id: 7},
        {id: 8, chefs_id: 3, recipe_id: 8},
        {id: 9, chefs_id: 3, recipe_id: 9},
      ]);
    });
};