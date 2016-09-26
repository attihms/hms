'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

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

  const billDetail = sequelize.define(
    'bill_details',
    billDetailModel,
    _.extend(
     {
       classMethods: {
         associate() {
           billDetail.belongsTo(sequelize.models.bills);
         }
       }
     },
     CommonModel.options
   )
  );

  return billDetail;
};
