'use strict';

const authentication = require('./authentication');
const user = require('./user');

const paymentMethod = require('./payment-method');
const roomType = require('./room-type');
const bookingAgent = require('./booking-agent');

const reservation = require('./reservation');
const bill = require('./bill');
const registration = require('./registration');

module.exports = function () {
  const app = this;

  app.configure(authentication);
  app.configure(user);

  app.configure(paymentMethod);
  app.configure(roomType);
  app.configure(bookingAgent);

  app.configure(reservation);
  app.configure(registration);
  app.configure(bill);
};
