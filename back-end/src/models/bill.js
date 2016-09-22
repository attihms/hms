'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const billModel = {
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    }
  };

  const options = _.extend(
    CommonModel.options, {
      paranoid: true
    }
  );

  const bill = sequelize.define(
    'bills',
    _.extend(
      billModel,
      CommonModel.payment
    ),
    options
  );

  // bill.sync();

  return bill;
};
