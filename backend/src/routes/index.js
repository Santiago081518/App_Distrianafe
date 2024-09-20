const express = require('express');
const routerUser = require('./user.router');
const routerCart = require('./cart.router');
const routerCategory = require('./category.router');
const routerFragancy = require('./fragancy.router');
const routerImage = require('./image.router');
const routerNotification = require('./notification.router');
const routerProductDetail = require('./productDetail.router');
const routerPurchase = require('./purchase.router');
const routerRol = require('./rol.router');
const routerStatusBuy = require('./statusBuy.router');
const router = express.Router();

// colocar las rutas aquí
router.use(routerUser)
router.use(routerCart)
router.use(routerCategory)
router.use(routerFragancy)
router.use(routerImage)
router.use(routerNotification)
router.use(routerProductDetail)
router.use(routerPurchase)
router.use(routerRol)
router.use(routerStatusBuy)


module.exports = router;