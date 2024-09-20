const { getAll, create, getOne, remove, update, getApprovedPurchases, getCancelPurchases } = require('../controllers/purchase.controllers');
const express = require('express');

const routerPurchase = express.Router();

routerPurchase.route('/purchases')
    .get(getAll)
    .post(create);

routerPurchase.route('/purchases/approved')
    .get(getApprovedPurchases)

routerPurchase.route('/purchases/cancel')
    .get(getCancelPurchases)

routerPurchase.route('/purchases/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerPurchase;