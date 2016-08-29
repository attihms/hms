var restify = require('restify');
import models from '../models';
import { Reservation } from './controllers';

var server = restify.createServer({
    name: 'hms',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/reservations', function (req, res, next) {
    const reservation = new Reservation();
    reservation.search()
        .then((reservations) => {
            res.send(reservations);
        });

    return next();
});

server.get('/reservation/:id', function (req, res, next) {
    const reservation = new Reservation();
    reservation.findById(req.params.id)
        .then( (reservation) => {
            res.send(reservation);
        }).finally( (err) => {
            res.send('Not found');
        });

    return next();
});

server.post('/reservations', function (req, res, next) {
    const reservation = new Reservation();
    reservation
        .create(req.body)
        .then((data) => {
            res.send(data.dataValues);
        });

    return next();
});

server.put('/reservations/:id', function (req, res, next) {
    const reservation = new Reservation();
    reservation
        .update(req.params.id, req.body)
        .then((data) => {
            res.send(data.dataValues);
        })
        .finally(() => res.send('Not found'));

    return next();
});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
