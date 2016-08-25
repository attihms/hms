var restify = require('restify');
import { Reservation } from './model/reservation';

var server = restify.createServer({
    name: 'hms',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
    Reservation.findAll().then(function(reservations) {
        res.send(reservations);
    });

    return next();
});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});
