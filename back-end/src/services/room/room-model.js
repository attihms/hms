'use strict';

import _ from 'lodash';
import DataTypes from 'sequelize';
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
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
    CommonModel.options, {
      timestamps: true,
      paranoid: true
    }
  );

  const room = sequelize.define(
    'rooms',
    _.extend(
      roomModel
    ),
    options
  );

  // room.sync();

  return room;
};
