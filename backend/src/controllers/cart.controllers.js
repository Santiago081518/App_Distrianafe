const catchError = require('../utils/catchError');
const Cart = require('../models/Cart');
const ProductDetail = require('../models/ProductDetail');
const Image = require("../models/Image");

const getAll = catchError(async (req, res) => {
  const { userId, session_id } = req.query;

  let whereClause = {};
  if (userId) {
    whereClause.userId = userId;
  } else if (session_id) {
    whereClause.session_id = session_id;
  }

  const results = await Cart.findAll({
    where: whereClause,
    include: [
      {
        model: ProductDetail,
        include: [Image],
      },
    ],
  });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Cart.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Cart.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Cart.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Cart.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
}