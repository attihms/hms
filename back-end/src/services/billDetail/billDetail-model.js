'use strict';

import _ from 'lodash';
const DataTypes = require('sequelize');
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
  const billDetailModel = {
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false
    }
  };

  const options = _.extend(
    CommonModel.options, {
      classMethods: {
        associate() {
          billDetail.belongsTo(sequelize.models.bills);
        }
      }
    }
  );

  const billDetail = sequelize.define(
    'bill_details',
    billDetailModel,
    CommonModel.options
  );

  return billDetail;
};
