import { reservation } from '../../models'

class Reservation {
    search() {
        return reservation.findAll();
    }

    findById(id) {
        return reservation.findById(id);
    }

    create(formData) {
        return reservation
            .build(formData)
            .save();
    }

    update(id, formData) {
        return this.findById(id)
            .then((reservation) => {
                return reservation.update(formData);
            });
    }
}

export default Reservation
