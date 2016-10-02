'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('room_types', [
      { name: 'Superior Double'},
      { name: 'Superior Twin'},
      { name: 'Luxury Double'},
      { name: 'Luxury Twin'},
      { name: 'Suite'}
    ], {}).then( function() {
      return queryInterface.bulkInsert('payment_methods', [
        { name: 'Cash'},
        { name: 'Credit Card'},
        { name: 'Company bill'}
      ], {});
    }).then( function() {
      return queryInterface.bulkInsert('booking_agents', [
        { name: 'Travel Agent'},
        { name: 'Direct'},
        { name: 'Online Travel Agent'},
        { name: 'Hotel booking engine'},
        { name: 'Corporate'}
      ], {});
    });
  },

  down: function (queryInterface, Sequelize) {
    var sql = 'truncate table room_types;' +
      'truncate table payment_methods; ' +
      'truncate table booking_agents;';

    return queryInterface.sequelize.query(sql, {});
  }
};
