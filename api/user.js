const express = require('express');
const config = require('../config');

const router = express.Router();

const User = require('../models/user.model');

const userAuthorization = () => {
  router.post('/', (req, res) => {
    const { email, password} = req.body;

    User
      .findOne({ email, password })
      .then(user => res.json(user));
  });
}

const addUser = () => {
  router.post('/', (req, res) => {
    const { email, password} = req.body;

    const newUser = new User({ email, password });

    newUser.save(user => res.json(user));
  });
}

const USER_ROUTER = {
  URL: `${config.BASE_API_DOMAIN}/users`,
  handlers: {
    POST_AUTH: userAuthorization,
    POST: addUser,
  }
}

module.exports = USER_ROUTER;
