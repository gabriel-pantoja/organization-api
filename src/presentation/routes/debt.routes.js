const express = require('express');
const routes = express.Router();
const authService = require('../../application/service/auth.service')
const debtController = require('../controllers/debt.controller')

routes.use(authService.check_token);

routes.get('/debt', debtController.getAll);
routes.get('/debt/:id', debtController.getById);
routes.post('/debt', debtController.post);
routes.put('/debt/:id', debtController.put);
routes.delete('/debt/:id', debtController.delete);

module.exports = routes;