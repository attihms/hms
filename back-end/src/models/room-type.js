'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var options = _.extend(
        commonModel.options,
        {
            timestamps: false
        }
    );

    var RoomType = sequelize.define('room_type', {
        name: DataTypes.STRING(25)
    }, options);

    return RoomType;
};
