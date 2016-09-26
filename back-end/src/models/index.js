'use strict';

const Sequelize = require('sequelize');

const paymentMethod = require('./payment-method');
const roomType = require('./room-type');
const bookingAgent = require('./booking-agent');
const reservation = require('./reservation');
const bill = require('./bill');
const billDetail = require('./bill-detail');
const registration = require('./registration');
const user = require('./user');

module.exports = function () {
  const app = this;

  const sequelize = new Sequelize(app.get('db_url'), {
    dialect: app.get('db_dialect')
  });
  app.set('sequelize', sequelize);

  app.configure(user);
  app.configure(bookingAgent);
  app.configure(roomType);
  app.configure(paymentMethod);
  app.configure(reservation);
  app.configure(bill);
  app.configure(billDetail);
  app.configure(registration);

  app.set('models', sequelize.models);

  Object.keys(sequelize.models).forEach(function (modelName) {
    if ('associate' in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
};
