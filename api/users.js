const express = require('express');
const config = require('../config');

const router = express.Router();

const User = require('../models/user.model');

router.post('/', (req, res) => {
  const { email, password} = req.body;

  User
    .findOne({ email, password })
    .then(user => res.json(user));
});

router.post('/create', (req, res) => {
  const { email, password} = req.body;

  const newUser = new User({ email, password });

  newUser.save(user => res.json(user));
});

router.get('/', (req, res) => {
  User
    .find()
    .then(users => res.json(users));
});

module.exports = router;;
