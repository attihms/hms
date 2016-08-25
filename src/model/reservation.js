import Sequelize from 'sequelize';
import faker from 'faker';

function randomize(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function randomizeFloatNumber(min, max) {
    return (Math.random() * (min - max) + max).toFixed(1);
}

Reservation.sync({force: true}).then(function () {
    const titles = ['Mr', 'Ms', 'Mrs'];
    const nationalities = ['China', 'Japan', 'Singapore', 'Korea', 'US', 'UK', 'Russia', 'Malaysia', 'Australia', 'Cambodia', 'European', 'American', 'Asian', 'Vietnam', 'Viet Kieu', 'Others'];
    const bookingSources = ['Travel Agent', 'Direct', 'Online Travel Agent', 'Hotel booking engine', 'Corporate'];
    const roomTypes = ['Superior Double', 'Superior Twin', 'Luxury Double', 'Luxury Twin', 'Suite'];
    const numbers = [1, 2, 3, 4];
    const paymentMethods = ['Cash', 'Credit Card', 'Company bill'];
    const specialRequests = ['Extra bed', 'Babycot', 'Balcony', 'Quiet room', 'Bathtub', 'Shower', 'Nice view', 'Others'];

    for (let i of Array(100).keys()) {
        Reservation.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          title: randomize(titles),
          checkIn: faker.date.future(0, "2016-10-01"),
          checkOut: faker.date.future(0, "2016-10-11"),
          nationality: randomize(nationalities),
          bookingSource: randomize(bookingSources),
          roomType: randomize(roomTypes),
          price: randomizeFloatNumber(100, 2000),
          numberOfRoom: randomize(numbers),
          numberOfPerson: randomize(numbers),
          paymentMethod: randomize(paymentMethods),
          specialRequest: randomize(specialRequests),
        });
    }
  return true;
});
