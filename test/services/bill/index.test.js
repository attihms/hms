'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('bill service', function() {
  it('registered the bills service', () => {
    assert.ok(app.service('bills'));
  });
});
