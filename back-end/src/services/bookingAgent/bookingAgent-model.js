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

  const bookingAgent = sequelize.define('booking_agents', {
    name: DataTypes.STRING(25),
    website: DataTypes.STRING
  }, options);

  // bookingAgent.sync();

  return bookingAgent;
};
