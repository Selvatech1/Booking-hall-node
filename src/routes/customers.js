// routes/customers.js
const express = require('express');
const router = express.Router();
const storage = require('../storage');

// Endpoint to list all customers with booked data
router.get('/', (req, res) => {
  const customerBookings = storage.bookings.reduce((acc, booking) => {
    if (!acc[booking.customerName]) {
      acc[booking.customerName] = [];
    }
    acc[booking.customerName].push({
      roomId: booking.roomId,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime
    });
    return acc;
  }, {});

  res.send(customerBookings);
});

// Endpoint to list how many times a customer has booked a room
router.get('/bookings', (req, res) => {
  const customerStats = storage.bookings.map(booking => ({
    customerName: booking.customerName,
    roomId: booking.roomId,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    bookingId: booking.bookingId,
    bookingDate: booking.date,
    bookingStatus: 'Booked'
  }));

  res.send(customerStats);
});

module.exports = router;
