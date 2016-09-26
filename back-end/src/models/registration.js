'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const registrationModel = {
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  };

  const options = _.extend(
    {
      timestamps: true,
      paranoid: true
    },
    CommonModel.options
  );

  const registration = sequelize.define(
    'registrations',
    _.extend(
      registrationModel,
      CommonModel.reservation,
      CommonModel.payment
    ),
    options
  );

  return registration;
};
