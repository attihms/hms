'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const errors = require('feathers-errors');

const validateData = (hook) => {
  const { roomId, checkIn, checkOut } = hook.data;

  return hook.app.service('schedules').find({
    query: {
      roomId: roomId,
      checkIn: checkIn,
      checkOut: checkOut
    }
  }).then(schedules => {

    if ( schedules.total > 0 ) {
      throw new errors.BadRequest(`Invalid request`, {
        errors: [
          {
            path: 'reservations',
            value: schedules,
            message: `This room is occupied.`
          }
        ]
      });
    }

    return hook;
  });
};

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [validateData],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
