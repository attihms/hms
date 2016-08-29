'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomize(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function randomizeFloatNumber(min, max) {
    return (Math.random() * (min - max) + max).toFixed(1);
}

_models2.default.reservation.sync({
    force: true
}).then(function () {
    var titles = ['Mr', 'Ms', 'Mrs'];
    var nationalities = ['China', 'Japan', 'Singapore', 'Korea', 'US', 'UK', 'Russia', 'Malaysia', 'Australia', 'Cambodia', 'European', 'American', 'Asian', 'Vietnam', 'Viet Kieu', 'Others'];
    var bookingSources = ['Travel Agent', 'Direct', 'Online Travel Agent', 'Hotel booking engine', 'Corporate'];
    var roomTypes = ['Superior Double', 'Superior Twin', 'Luxury Double', 'Luxury Twin', 'Suite'];
    var numbers = [1, 2, 3, 4];
    var paymentMethods = ['Cash', 'Credit Card', 'Company bill'];
    var specialRequests = ['Extra bed', 'Babycot', 'Balcony', 'Quiet room', 'Bathtub', 'Shower', 'Nice view', 'Others'];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Array(100).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            _models2.default.reservation.create({
                firstName: _faker2.default.name.firstName(),
                lastName: _faker2.default.name.lastName(),
                title: randomize(titles),
                checkIn: _faker2.default.date.future(0, "2016-10-01"),
                checkOut: _faker2.default.date.future(0, "2016-10-11"),
                nationality: randomize(nationalities),
                bookingSourceId: i,
                bookingSourceName: randomize(bookingSources),
                roomId: i,
                roomType: randomize(roomTypes),
                price: randomizeFloatNumber(100, 2000),
                numberOfRoom: randomize(numbers),
                numberOfPerson: randomize(numbers),
                paymentMethodId: i,
                paymentMethodName: randomize(paymentMethods),
                specialRequest: randomize(specialRequests)
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return true;
});
