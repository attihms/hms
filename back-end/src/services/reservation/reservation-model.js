'use strict';

import _ from 'lodash';
import DataTypes from 'sequelize';
import CommonModel from '../../models/common-model';

module.exports = function (sequelize) {
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
        CommonModel.options,
        {
            timestamps: true,
            paranoid: true
        }
    )
    const Reservation = sequelize.define(
        'reservation',
        _.extend(
            reservationModel,
            CommonModel.reservation,
            CommonModel.payment
        ),
        options
    );

    Reservation.sync();

    return Reservation;
};
