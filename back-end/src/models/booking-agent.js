'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const options = _.extend(
    {
      timestamps: false,
      tableName: 'booking_agents'
    },
    CommonModel.options
  );

  const bookingAgent = sequelize.define('bookingAgents', {
    name: DataTypes.STRING(25),
    website: DataTypes.STRING
  }, options);

  return bookingAgent;
};
