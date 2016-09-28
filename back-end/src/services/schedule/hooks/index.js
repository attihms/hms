'use strict';

const _ = require('lodash');
const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const manipulateData = (hook, next) => {
  const data = hook.result.data;

  // hook.result.data = data[0];
  // hook.result.data = _.map(data, 'roomId');

  next();
};

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: []
};

exports.after = {
  all: [],
  find: [manipulateData]
};
