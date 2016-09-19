'use strict';
const paymentMethod = require('./paymentMethod');
const roomType = require('./roomType');
const bookingAgent = require('./bookingAgent');
const reservation = require('./reservation');
const bill = require('./bill');
const billDetail = require('./billDetail');
const registration = require('./registration');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: true
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
  app.configure(bookingAgent);
  app.configure(roomType);
  app.configure(paymentMethod);
  app.configure(reservation);
  app.configure(bill);
  app.configure(billDetail);
  app.configure(registration);

  app.set('models', sequelize.models);
  Object.keys(sequelize.models).forEach(function(modelName) {
    if ("associate" in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
};
