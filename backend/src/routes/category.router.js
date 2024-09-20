const { getAll, create, getOne, remove, update } = require('../controllers/category.controllers');
const express = require('express');
const { verifyJwt } = require("../utils/verifyJWT");

const routerCategory = express.Router();

routerCategory.route('/categories')
    .get(getAll)
    .post(verifyJwt, create);

routerCategory.route('/categories/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerCategory;