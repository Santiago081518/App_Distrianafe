const { getAll, create, getOne, remove, update } = require('../controllers/rol.controllers');
const express = require('express');

const routerRol = express.Router();

routerRol.route('/roles')
    .get(getAll)
    .post(create);

routerRol.route('/roles/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerRol;