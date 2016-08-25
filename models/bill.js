'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var billModel = {
        roomNumber: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        tax: {
            type: DataTypes.FLOAT,
            validate: {
                notNull: true
            }
        },
        total: {
            type: DataTypes.DECIMAL(15, 2),
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
