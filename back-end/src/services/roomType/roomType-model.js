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

  const roomType = sequelize.define('room_types', {
    name: DataTypes.STRING(25)
  }, options);

  // roomType.sync();

  return roomType;
};
