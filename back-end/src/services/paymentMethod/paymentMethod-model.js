'use strict';

import _ from 'lodash';
const DataTypes = require('sequelize');
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
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
