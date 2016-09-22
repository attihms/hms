'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: app.get('models').reservations,
    paginate: {
      default: 100,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/reservations', service(options));

  // Get our initialize service to that we can bind hooks
  const reservationService = app.service('/reservations');

  // Set up our before hooks
  reservationService.before(hooks.before);

  // Set up our after hooks
  reservationService.after(hooks.after);
};
