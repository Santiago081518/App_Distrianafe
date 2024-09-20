const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ProductDetail = sequelize.define('productDetail', {
    nameProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amountProduct: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // category_id
    // fragancy_id
});

module.exports = ProductDetail;