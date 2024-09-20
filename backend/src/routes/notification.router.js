const { getAll, create, getOne, remove, update } = require('../controllers/notification.controllers');
const express = require('express');

const routerNotification = express.Router();

routerNotification.route('/notifications')
    .get(getAll)
    .post(create);

routerNotification.route('/notifications/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerNotification;