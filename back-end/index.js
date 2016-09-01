import restify from 'restify';
import models from './models';
import { Reservation } from './controllers';

var server = restify.createServer({
    name: 'hms',
    version: '1.0.0'
});
server.use(restify.CORS());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

const reservation = new Reservation();

server.get('/reservations', reservation.search);
server.get('/reservation/:id', reservation.get);
server.post('/reservations', reservation.create);
server.put('/reservations/:id', reservation.update);
server.del('/reservations/:id', reservation.delete);
server.on('uncaughtException', function (req, res, next, err) {
   res.send(err);

   return next();
});

server.listen(process.env.SERVER_PORT, function () {
    console.log('%s listening at %s', server.name, server.url);
});
