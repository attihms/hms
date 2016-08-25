'use strict';
var models = require("../models");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(
            models.booking_agent.tableName,
            models.booking_agent.attributes
        ).then( function() {
            return queryInterface.createTable(
                models.payment_method.tableName,
                models.payment_method.attributes
            );
        }).then( function() {
            return queryInterface.createTable(
                models.room_type.tableName,
                models.room_type.attributes
            );
        }).then( function() {
            return queryInterface.createTable(
                models.reservation.tableName,
                models.reservation.attributes
            );
        }).then( function() {
            return queryInterface.createTable(
                models.registration.tableName,
                models.registration.attributes
            );
        }).then( function() {
            return queryInterface.createTable(
                models.bill.tableName,
                models.bill.attributes
            );
        }).then( function() {
            return queryInterface.createTable(
                models.bill_detail.tableName,
                models.bill_detail.attributes
            );
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('booking_agent');
        return queryInterface.dropTable('payment_method');
        return queryInterface.dropTable('room_type');
        return queryInterface.dropTable('reservations');
        return queryInterface.dropTable('registration');
        return queryInterface.dropTable('bill_detail');
        return queryInterface.dropTable('bill');
    }
};
