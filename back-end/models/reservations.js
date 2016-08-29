'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var reservationModel = {
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        middleName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        title: {
            type: DataTypes.STRING(3)
        },
        checkIn: {
            type: DataTypes.DATE,
            allowNull: false
        },
        checkOut: {
            type: DataTypes.DATE,
            allowNull: false
        },
        numberOfRoom: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1
            }
        },
        numberOfPerson: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1
            }
        },
        enfant: {
            type: DataTypes.STRING
        }
    };

    var options = _.extend(
        commonModel.options,
        {
            paranoid: true
        }
    )
    var Reservation = sequelize.define(
        'reservation',
        _.extend(
            reservationModel,
            commonModel.reservation,
            commonModel.payment
        ),
        options
    );

    return Reservation;
};
