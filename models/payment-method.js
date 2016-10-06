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

    var PaymentMethod = sequelize.define('payment_method', {
        name: DataTypes.STRING(25)
    }, options);

    return PaymentMethod;
};
