const { getAll, create, getOne, remove, update } = require('../controllers/fragancy.controllers');
const express = require('express');
const { verifyJwt } = require("../utils/verifyJWT");

const routerFragancy = express.Router();

routerFragancy.route('/fragancies')
    .get(getAll)
    .post(verifyJwt, create);

routerFragancy.route('/fragancies/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerFragancy;