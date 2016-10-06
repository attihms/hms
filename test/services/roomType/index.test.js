'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('roomType service', function() {
  it('registered the roomTypes service', () => {
    assert.ok(app.service('roomTypes'));
  });
});
