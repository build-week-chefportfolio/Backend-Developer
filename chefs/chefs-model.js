const db = require('../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addChef,
};

function getAll() {
    return db('chefs');
}

function getById(id) {
    return db('chefs')
        .where({id})
        .first();
 }

function addChef(chef) {
    return db('chefs')
        .insert(chef)
        .then((id) => {
        return getById(id[0]) 
        
    });
}