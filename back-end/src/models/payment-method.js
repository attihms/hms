'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const options = _.extend(
    CommonModel.options, {
      timestamps: false
    }
  );

  const paymentMethod = sequelize.define('payment_methods', {
    name: DataTypes.STRING(25)
  }, options);

  // paymentMethod.sync();

  return paymentMethod;
};
