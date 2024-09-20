const catchError = require('../utils/catchError');
const ProductDetail = require('../models/ProductDetail');
const Category = require('../models/Category');
const Image = require('../models/Image');

const getAll = catchError(async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await ProductDetail.findAndCountAll({
      include: [Category, Image],
      limit: limit,
      offset: offset,
    });

    return res.json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const getAllWithoutPagination = catchError(async (req, res) => {
  try {
    const products = await ProductDetail.findAll({
      include: [Category, Image],
    });
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const create = catchError(async (req, res) => {
  const result = await ProductDetail.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ProductDetail.findByPk(id, {
    include: [Category, Image],
  });
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ProductDetail.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ProductDetail.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  getAllWithoutPagination,
  create,
  getOne,
  remove,
  update
}