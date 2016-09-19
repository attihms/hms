'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('billDetail service', function() {
  it('registered the billDetails service', () => {
    assert.ok(app.service('billDetails'));
  });
});
