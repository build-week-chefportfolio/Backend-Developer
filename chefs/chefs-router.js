const express = require('express');

const Chefs = require('./chefs-Model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chefs = await Chefs.getAll();
        res.status(200).json(chefs);
    } catch (err) {
        next({err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing list of tasks.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [chefs, recipes] = await Chefs.getById(
            req.params.id
        );
        chef.recipe = recipes;
        res.status(200).json(chefs);
    } catch (err) {
        next({err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the task.',
        });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const [addedChef] = await Chefs.addChef(req.body);
        addChef.completed = Boolean(addedChef.completed);
        res.status(201).json(addedChef);
    } catch (err) {
        next({err: err,
            stat: 500,
            message: 'Sorry, there was an error adding the task.',
        });
    }
});
module.exports = router;

module.exports = router;