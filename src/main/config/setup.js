const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api', routes);
  // app.use(cors(corsOptions));
}
