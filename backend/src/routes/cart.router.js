const { getAll, create, getOne, remove, update } = require('../controllers/cart.controllers');
const express = require('express');

const routerCart = express.Router();

routerCart.route('/carts')
    .get(getAll)
    .post(create);

routerCart.route('/carts/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerCart;