'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const reservationModel = {
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

  const options = _.extend(
    CommonModel.options, {
      timestamps: true,
      paranoid: true
    }
  )

  const reservation = sequelize.define(
    'reservations',
    _.extend(
      reservationModel,
      CommonModel.reservation,
      CommonModel.payment
    ),
    options
  );

  // reservation.sync();

  return reservation;
};
