'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var billModel = {
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        }
    };

    var options = _.extend(
        commonModel.options,
        {
            paranoid: true
        }
    );

    var Bill = sequelize.define(
        'bill',
        _.extend(
            billModel,
            commonModel.payment
        ),
        options
    );

    return Bill;
};
