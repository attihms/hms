'use strict';

const DataTypes = require('sequelize');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const user = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  return user;
};
