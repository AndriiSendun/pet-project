// PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// MODULES
const config = require('./config');

const server = express();

server.use(cors());
server.use(express.json());
server.options('*', cors());

server.listen(config.PORT, () => {
  console.log('server is running');
})
