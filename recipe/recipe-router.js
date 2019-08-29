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
        res.status(500).json({error: "that recipe doesn't exist"})
    }
});

router.post('/add', async (req, res, next) => {
    try {
        const [addedRecipe] = await Recipe.addRecipe(req.body);
        res.status(201).json(addedRecipe);
    } catch (err) {
        next({
            err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the recipe.',
        });
    }
});
router.put('/update/:id', async (req, res) => {
    try {
        const recipe = await Recipe.updateRecipe(req.params.id, req.body);
        console.log(recipe)
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({
                message: 'The post could not be found'
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "could not update the post"
        })
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const recipe = await Recipe.removeRecipe(req.params.id);
            console.log(recipe)
        res.status(200).json({
            message: 'succesfully deleted'
        })
    } catch (err) {
        res.status(500).json({
            message: 'unable to delete the posts'
        })
    }
})
module.exports = router;