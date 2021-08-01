const express = require('express');
const routes = express.Router();
const authController = require('../../presentation/controllers/auth.controller')

routes.post('/auth/login', authController.login);

module.exports = routes;