'use strict';

const service = require('feathers-sequelize');
const bookingAgent = require('./bookingAgent-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: bookingAgent(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/booking-agents', service(options));

  // Get our initialize service to that we can bind hooks
  const bookingAgentService = app.service('/booking-agents');

  // Set up our before hooks
  bookingAgentService.before(hooks.before);

  // Set up our after hooks
  bookingAgentService.after(hooks.after);
};
