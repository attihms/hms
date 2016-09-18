'use strict';

import globalHooks from '../../../hooks';
import hooks from 'feathers-hooks';
import {
  hooks as auth
} from 'feathers-authentication';

const manipulateData = (hook, next) => {
  // const { data } = hook.result;
  // hook.result.data = data[0];

  next();
};

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [manipulateData],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
