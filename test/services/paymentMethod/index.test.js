'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('paymentMethod service', function() {
  it('registered the paymentMethods service', () => {
    assert.ok(app.service('paymentMethods'));
  });
});
