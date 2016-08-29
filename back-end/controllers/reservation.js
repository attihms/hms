import { reservation } from '../models'

class Reservation {
    search(req, res, next) {
        reservation.findAll()
            .then((reservations) => {
                res.send(reservations);
            });

        return next();
    }

    get(req, res, next) {
        reservation.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then((reservation) => {
                res.send(reservation);
            });

        return next();
    }

    create(req, res, next) {
        reservation
            .build(req.body)
            .save()
            .then((data) => {
                res.send(data.dataValues);
            });

        return next();
    }

    update(req, res, next) {
        reservation.findById(req.params.id)
            .then((reservation) => {
                return reservation.update(req.body);
            })
            .then((data) => {
                res.send(data.dataValues);
            });

            return next();
    }

    delete(req, res, next) {
        reservation.findById(req.params.id)
            .then((reservation) => {
                return reservation.destroy();
            })
            .then((respone) => {
                res.send(respone);
            });

        return next();
    }
}

export default Reservation
