
const db = require('../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addRecipe,
};

function getAll() {
    return db('recipe');
}

async function getById(id) {
    return [
        await db('recipe')
            .where({ id })
            .first(),
        await db('chefs_recipe as a')
            .where('recipe_id', id)
            .join('chefs as b', 'a.chefs_id', 'b.id')
            .select('b.id', 'b.FirstNameLastName', 'b.yearsexp', 'b.relocate', 'b.location', 'b.state', 'b.contactpref', 'b.telephone', 'b.email', 'b.public'),
    ];
}

function addRecipe(chef) {
    return db('recipe')
        .insert(chef)
        .then(([id]) => getById(id));
}