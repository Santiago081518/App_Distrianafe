const { getAll, create, getOne, remove, update } = require('../controllers/statusBuy.controllers');
const express = require('express');

const routerStatusBuy = express.Router();

routerStatusBuy.route('/statusBuys')
    .get(getAll)
    .post(create);

routerStatusBuy.route('/statusBuys/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerStatusBuy;