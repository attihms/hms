'use strict';

const service = require('feathers-sequelize');
const billDetail = require('./billDetail-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: billDetail(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/billDetails', service(options));

  // Get our initialize service to that we can bind hooks
  const billDetailService = app.service('/billDetails');

  // Set up our before hooks
  billDetailService.before(hooks.before);

  // Set up our after hooks
  billDetailService.after(hooks.after);
};
