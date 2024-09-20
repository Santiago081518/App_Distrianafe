const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT')

const routerUser = express.Router();

routerUser.route('/users')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/users/login')
    .post(login);

routerUser.route('/users/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;