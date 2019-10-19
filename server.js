// PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// MODULES
const config = require('./config');

const server = express();
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  dbName: 'test',
}

mongoose
  .connect(config.MONGO_DB, MONGO_CONFIG)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

server.use(cors());
server.use(express.json());
server.options('*', cors());

server.use('/api/users', require('./api/users'));

server.listen(config.PORT, () => {
  console.log('server is running');
})
