const express = require('express');
const routes = express.Router();
const authRoutes = require('./src/presentation/routes/auth.routes');
const shoppingRoutes = require('./src/presentation/routes/shopping.routes');
const debtRoutes = require('./src/presentation/routes/debt.routes');


routes.get('/', function (req, res) {
    res.status(404).send('Not found Teste');
});

routes.use('/', authRoutes);
routes.use('/', debtRoutes);
routes.use('/', shoppingRoutes);


module.exports = routes;