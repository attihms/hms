'use strict';

import _ from 'lodash';
const DataTypes = require('sequelize');
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
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
    CommonModel.options, {
      timestamps: true,
      paranoid: true
    }
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

  // registration.sync();

  return registration;
};
