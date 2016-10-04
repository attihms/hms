'use strict';

const hooks = require('./hooks');

class Schedule {
  setup(app) {
    this.app = app;
  }

  find(params) {
    const reservations = this.app.service('reservations');

    const { checkIn, checkOut } = params.query;
    let roomId = params.query.roomId;

    let query = {
      $or: [
        {
          checkIn: {
            $gt: checkIn,
            $lt: checkOut
          }
        },
        {
          checkOut: {
            $gt: checkIn,
            $lt: checkOut
          }
        }
      ]
    };

    if ( roomId ) {
      query.roomId = roomId;
    }

    return reservations.find({
      query: query
    });
    // .then(reservations => {
    //   return {
    //     test: reservations
    //   };
    // });
  }
}

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/schedules', new Schedule());

  // Get our initialize service to that we can bind hooks
  const scheduleService = app.service('/schedules');

  // Set up our before hooks
  scheduleService.before(hooks.before);

  // Set up our after hooks
  scheduleService.after(hooks.after);
};
