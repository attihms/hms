'use strict';

import _ from 'lodash';
const DataTypes = require('sequelize');
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
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
