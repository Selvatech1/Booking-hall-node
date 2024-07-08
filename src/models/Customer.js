const { v4: uuidv4 } = require('uuid');

class Customer {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
        this.bookings = [];
    }
}

module.exports = Customer;
