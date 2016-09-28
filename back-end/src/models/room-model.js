'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const roomModel = {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: true
      }
    },
    status: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      validate: {
          notEmpty: true
      }
    }
  };

  const options = _.extend(
    {
      timestamps: true,
      paranoid: true
    },
    CommonModel.options
  );

  const room = sequelize.define(
    'rooms',
    _.extend(
      roomModel
    ),
    options
  );

  return room;
};
