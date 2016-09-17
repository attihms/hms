'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var registrationModel = {
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    var options = _.extend(
        commonModel.options,
        {
            timestamps: true,
            paranoid: true
        }
    );

    var Registration = sequelize.define(
        'registration',
        _.extend(
            registrationModel,
            commonModel.reservation,
            commonModel.payment
        ),
        options
    );

    return Registration;
};
