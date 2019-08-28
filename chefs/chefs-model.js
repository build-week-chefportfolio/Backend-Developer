const db = require('../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addChef,
    removechef

};

function getAll() {
    return db('chefs');
}

async function getById(id) {
    return [
        await db('chefs')
            .where({ id })
            .first(),
        await db('chefs_recipe as a')
            .where('chefs_id', id)
            .join('recipe as b', 'a.recipe_id', 'b.id')
            .select('b.id', 'b.RecipeName', 'b.prepTime', 'b.description'),
    ];
}

function addChef(chef) {
    return db('chefs')
        .insert(chef)
        .then((id) => {
        return getById(id[0]) 
        
    });
}

function removechef(id) {
    return db('chefs')
      .where('id', id)
      .del();
  }