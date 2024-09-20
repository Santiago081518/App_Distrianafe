const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Notification = sequelize.define('notification', {
    notification: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Notification;