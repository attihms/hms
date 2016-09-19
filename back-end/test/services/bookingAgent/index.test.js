'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('bookingAgent service', function() {
  it('registered the bookingAgents service', () => {
    assert.ok(app.service('bookingAgents'));
  });
});
