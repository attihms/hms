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
      tableName: 'room_types'
    },
    CommonModel.options
  );

  const roomType = sequelize.define('roomTypes', {
    name: DataTypes.STRING(25)
  }, options);

  return roomType;
};
