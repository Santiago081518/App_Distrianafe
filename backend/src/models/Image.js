const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Image = sequelize.define('image', {
    urlImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // productDetail_id
});

module.exports = Image;