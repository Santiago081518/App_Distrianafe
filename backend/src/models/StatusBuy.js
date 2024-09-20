const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const StatusBuy = sequelize.define('statusBuy', {
    statusBuy: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = StatusBuy;