'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: app.get('models').payment_methods,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/paymentMethods', service(options));

  // Get our initialize service to that we can bind hooks
  const paymentMethodService = app.service('/paymentMethods');

  // Set up our before hooks
  paymentMethodService.before(hooks.before);

  // Set up our after hooks
  paymentMethodService.after(hooks.after);
};
