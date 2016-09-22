'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: app.get('models').room_types,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/roomTypes', service(options));

  // Get our initialize service to that we can bind hooks
  const roomTypeService = app.service('/roomTypes');

  // Set up our before hooks
  roomTypeService.before(hooks.before);

  // Set up our after hooks
  roomTypeService.after(hooks.after);
};
