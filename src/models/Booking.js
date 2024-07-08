const { v4: uuidv4 } = require('uuid');

class Booking {
    constructor(customerName, date, startTime, endTime, roomId) {
        this.id = uuidv4();
        this.customerName = customerName;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.roomId = roomId;
        this.status = 'booked';
    }
}

module.exports = Booking;
