var restify = require('restify');
import models from '../models';

var server = restify.createServer({
    name: 'hms',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/reservations', function (req, res, next) {
    models.reservation.findAll().then(function(reservations) {
        res.send(reservations);
    });

    return next();
});

server.get('/reservation/:id', function (req, res, next) {
    // Reservation.findAll().then(function(reservations) {
    //     res.send(reservations);
    // });
    res.send(req.params);

    return next();
});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
