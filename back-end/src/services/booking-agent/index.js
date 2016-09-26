'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: app.get('models').bookingAgents,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/bookingAgents', service(options));

  // Get our initialize service to that we can bind hooks
  const bookingAgentService = app.service('/bookingAgents');

  // Set up our before hooks
  bookingAgentService.before(hooks.before);

  // Set up our after hooks
  bookingAgentService.after(hooks.after);
};
