'use strict';

var DataTypes = require('sequelize');

module.exports = {
  payment: {
    price: DataTypes.DECIMAL(15, 2),
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: false
    },
    bookingSourceName: {
      type: DataTypes.STRING(25),
      validate: {
        notEmpty: true
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roomTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
};
