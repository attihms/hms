'use strict';

const service = require('feathers-sequelize');
const registration = require('./registration-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: registration(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/registrations', service(options));

  // Get our initialize service to that we can bind hooks
  const registrationService = app.service('/registrations');

  // Set up our before hooks
  registrationService.before(hooks.before);

  // Set up our after hooks
  registrationService.after(hooks.after);
};
