'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var registrationModel = {
        dob: {
            type: DataTypes.DATE,
            validate: {
                notNull: true
            }
        },
        roomNumber: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        }
    };

    var options = _.extend(
        commonModel.options,
        {
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
