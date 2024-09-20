const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchase = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    session_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userNoLoginName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressNoLogin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNoLogin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // productDetail_id
    // user_id
    // statusBuy_id
    // statusNotify_id
});

module.exports = Purchase;