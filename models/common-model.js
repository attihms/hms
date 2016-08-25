'use strict';
var DataTypes = require('sequelize');

module.exports = {
    payment: {
        price: DataTypes.DECIMAL(15, 2),
        paymentMethodId: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        paymentMethodName: {
            type: DataTypes.STRING(25),
            validate: {
                notEmpty: true
            }
        }
    },
    reservation: {
        nationality: {
            type: DataTypes.STRING
        },
        bookingSourceId: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        bookingSourceName: {
            type: DataTypes.STRING(25),
            validate: {
                notEmpty: true
            }
        },
        roomId: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        roomType: {
            type: DataTypes.STRING(25),
            validate: {
                notEmpty: true
            }
        },
        specialRequest: DataTypes.STRING(25)
    },
    options: {
        underscored: true,
        freezeTableName: true
    }
}
