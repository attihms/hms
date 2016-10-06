'use strict';
var _ = require('lodash');

module.exports = {
    up: function (queryInterface, Sequelize) {
        function mapToMan(o) {
            return {name: o};
        }

        var bookingSources = ['Travel Agent', 'Direct', 'Online Travel Agent', 'Hotel booking engine', 'Corporate'];
        var bookingAgentObject = _.map(bookingSources, mapToMan);

        var roomTypes = ['Superior Double', 'Superior Twin', 'Luxury Double', 'Luxury Twin', 'Suite'];
        var roomTypesObject = _.map(roomTypes, mapToMan);

        var paymentMethods = ['Cash', 'Credit Card', 'Company bill'];
        var paymentMethodsObject = _.map(paymentMethods, mapToMan);

        return queryInterface.bulkInsert(
            'booking_agent',
            bookingAgentObject,
        {})
        .then(function() {
            return queryInterface.bulkInsert(
                'room_type',
                roomTypesObject,
            {});
        })
        .then(function() {
            return queryInterface.bulkInsert(
                'payment_method',
                paymentMethodsObject,
            {});
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('booking_agent', null, {})
        .then(function() {
            return queryInterface.bulkDelete('room_type', null, {});
        }).then(function() {
            return queryInterface.bulkDelete('payment_method', null, {});
        });
    }
};
