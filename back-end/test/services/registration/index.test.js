'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('registration service', function() {
  it('registered the registrations service', () => {
    assert.ok(app.service('registrations'));
  });
});
