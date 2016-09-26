'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const options = _.extend(
    {
      timestamps: false,
      tableName: 'payment_methods'
    },
    CommonModel.options
  );

  const paymentMethod = sequelize.define('paymentMethods', {
    name: DataTypes.STRING(25)
  }, options);

  return paymentMethod;
};
