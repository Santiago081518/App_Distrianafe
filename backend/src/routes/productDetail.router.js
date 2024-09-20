const { getAll, create, getOne, remove, update, getAllWithoutPagination } = require('../controllers/productDetail.controllers');
const express = require('express');

const routerProductDetail = express.Router();

routerProductDetail.route('/productDetails')
    .get(getAll)
    .post(create);

routerProductDetail.route("/productDetails/all")
    .get(getAllWithoutPagination);

routerProductDetail.route('/productDetails/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerProductDetail;