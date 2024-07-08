// routes/rooms.js
const express = require('express');
const router = express.Router();
const storage = require('../storage');

// Endpoint to create a room
router.post('/', (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const roomId = storage.rooms.length + 1;
  const newRoom = { roomId, numberOfSeats, amenities, pricePerHour, bookings: [] };
  storage.rooms.push(newRoom);
  res.status(201).send(newRoom);
});

// Endpoint to list all rooms with booked data
router.get('/', (req, res) => {
  res.send(storage.rooms.map(room => ({
    roomId: room.roomId,
    numberOfSeats: room.numberOfSeats,
    amenities: room.amenities,
    pricePerHour: room.pricePerHour,
    bookings: room.bookings.map(booking => ({
      customerName: booking.customerName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime
    }))
  })));
});

module.exports = router;
