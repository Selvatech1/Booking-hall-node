const { v4: uuidv4 } = require('uuid');

class Room {
    constructor(name, seats, amenities, pricePerHour) {
        this.id = uuidv4();
        this.name = name;
        this.seats = seats;
        this.amenities = amenities;
        this.pricePerHour = pricePerHour;
        this.bookings = [];
    }
}

module.exports = Room;
