const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

// @route POST
router.post('/', (req, res) => {
  const { email, password} = req.body;

  const user = {
    email,
    password,
  }

  User.findOne({ password })
    .then(user => res.json(user));
});
