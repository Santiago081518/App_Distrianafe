const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Fragancy = sequelize.define('fragancy', {
    nameFragancy: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Fragancy;