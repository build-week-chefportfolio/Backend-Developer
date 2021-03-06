const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const restricted = require('./authenticate-middleware');

router.post('/register', (req, res) => {
  let user = req.body;

  if (!user.username || !user.password) {
    res.status(404).json({ message: 'No username or password submitted.' });
  }
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      console.log(user);
      if (username && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(201).json({ message: 'Logged in' });
      } else {
        res.status(404).json({ message: 'You shall not pass!' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/logout', restricted, (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'There was an error' });
      }
      res.end();
    });
  } else {
    res.end();
  }
});

module.exports = router;