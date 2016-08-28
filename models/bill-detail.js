'use strict';
var _ = require('lodash');
var commonModel = require('./common-model');

module.exports = function (sequelize, DataTypes) {
    var billDetailModel = {
        tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fee: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false
        }
    };

    var options = _.extend(
        commonModel.options,
        {
            classMethods: {
                associate: function(models) {
                    BillDetail.belongsTo(models.bill);
                }
            }
        }
    );

    var BillDetail = sequelize.define(
        'bill_detail',
        billDetailModel,
        options
    );

    return BillDetail;
};
