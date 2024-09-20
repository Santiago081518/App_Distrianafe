const { getAll, create, remove, } = require('../controllers/image.controllers');
const upload = require("../utils/multer");
const express = require('express');
const { verifyJwt } = require("../utils/verifyJWT");

const routerImage = express.Router();

routerImage.route('/images')
    .get(getAll)
    .post(verifyJwt, upload.single("image"), create);

routerImage.route('/images/:id')
    .delete(verifyJwt, remove)

module.exports = routerImage;