const express = require('express')
const cors = require('cors')

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

module.exports = (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  // app.use(cors(corsOptions));
}
