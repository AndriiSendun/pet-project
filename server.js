const express = require('express');

const server = express();

const PORT = 7001;

server.listen(PORT, () => {
  console.log('server is running');
})
