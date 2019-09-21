// PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// MODULES
const config = require('./config');
const USER_ROUTER = require('./api/user');

const server = express();
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose
  .connect(config.MONGO_DB, MONGO_CONFIG)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

server.use(cors());
server.use(express.json());
server.options('*', cors());

server.use(USER_ROUTER.URL, USER_ROUTER.handlers.POST.bind(this));
server.use(USER_ROUTER.URL, USER_ROUTER.handlers.POST_AUTH.bind(this));

server.listen(config.PORT, () => {
  console.log('server is running');
})
