'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('schedule service', function () {
  it('registered the schedule service', () => {
    assert.ok(app.service('schedules'));
  });

  it('find reservations by an amount of time', () => {
    const schedules = app.service('schedules');
    schedules.find({
      query: {
        checkIn: '2017-05-30',
        checkOut: '2017-06-01'
      }
    }).then(reservations => {
      assert.equal(reservations.skip, 0);
    });
  });
});
