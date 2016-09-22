'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: app.get('models').bills,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/bills', service(options));

  // Get our initialize service to that we can bind hooks
  const billService = app.service('/bills');

  // Set up our before hooks
  billService.before(hooks.before);

  // Set up our after hooks
  billService.after(hooks.after);
};
