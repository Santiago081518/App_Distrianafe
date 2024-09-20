const catchError = require('../utils/catchError');
const Image = require('../models/Image');
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

const getAll = catchError(async (req, res) => {
  const results = await Image.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const file = req.file;
  const { productDetailId } = req.body;
  const { url } = await uploadToCloudinary(file);
  if (!url) {
    return res.status(400).json({ error: "Invalid image URL" });
  }
  const image = await Image.create({ urlImage: url, productDetailId });
  return res.status(201).json(image);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const image = await Image.findByPk(id);
  if (!image) return res.sendStatus(404);
  await deleteFromCloudinary(image.urlImage);
  await image.destroy();
  return res.sendStatus(204);
});

module.exports = {
  getAll,
  create,
  remove,
}