const express = require('express');

const Chefs = require('./chefs-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chefs = await Chefs.getAll();
        res.status(200).json(chefs);
    } catch (err) {
        next({err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing list of chefs.',
        });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const [chefs, recipes] = await Chefs.getById(
            req.params.id
        );
        chefs.recipe = recipes;
        res.status(200).json(chefs);
    } catch (err) {
        next({err: err,
            stat: 500,
            message: 'Sorry, there was an error accessing the chef.',
        });
    }
});

router.post('/add', (req, res) => {
    const chef = req.body;

    if (!chef) {
        res.status(400).json({ message: "missing post data" });
    } else {
        Chefs.addChef(chef)
            .then(chefUser => {
                if (chefUser) {
                    console.log(chefUser)
                    res.status(201).json(chef)
                }
            })
            .catch(err => {
                err = { error: "There was an error while saving the chef" };
                res.status(500).json(err)
            })
    }
});
router.put('/update/:id', async (req, res) => {
    try {
        const chef = await Chefs.updateChef(req.params.id, req.body);
        console.log(chef)
        if (chef) {
            res.status(200).json(chef);
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
        const chef = await Chefs.removechef(req.params.id);
            console.log(chef)
        res.status(200).json({
            message: 'succesfully deleted'
        })
    } catch (err) {
        res.status(500).json({
            message: 'unable to delete the chef'
        })
    }
})
module.exports = router;

module.exports = router;