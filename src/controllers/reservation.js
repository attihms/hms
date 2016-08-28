import { reservation } from '../../models'

class Reservation {
    findById() {

    }

    create(formData) {
        return reservation
            .build(formData)
            .save();
    }
}

export default Reservation
