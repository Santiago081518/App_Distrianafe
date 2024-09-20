const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Rol = sequelize.define('rol', {
    Rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Rol;