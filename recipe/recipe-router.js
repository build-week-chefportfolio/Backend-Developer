const express = require('express');
const Recipe = require('./recipe-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const recipe = await Recipe.getAll();
        res.status(200).json(recipe);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the list of recipes.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [recipe, chefs] = await Recipe.getById(
            req.params.id
        );

        recipe.chefs = chefs;
        res.status(200).json(recipe);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the recipe.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [addedRecipe] = await Recipe.addContext(req.body);
        res.status(201).json(addedRecipe);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the recipe.',
        });
    }
});
module.exports = router;