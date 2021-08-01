const express = require('express');
const routes = express.Router();
const authRoutes = require('./src/presentation/routes/auth.routes');
const shoppingRoutes = require('./src/presentation/routes/shopping.routes');

routes.get('/', function (req, res) {
    res.status(404).send('Not found Teste');
});

routes.use('/', authRoutes);
routes.use('/', shoppingRoutes);

module.exports = routes;