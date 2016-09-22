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

  const bookingAgent = sequelize.define('booking_agents', {
    name: DataTypes.STRING(25),
    website: DataTypes.STRING
  }, options);

  // bookingAgent.sync();

  return bookingAgent;
};
