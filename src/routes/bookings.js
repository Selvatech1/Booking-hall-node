// routes/bookings.js
const express = require('express');
const router = express.Router();
const storage = require('../storage');

// Endpoint to book a room
router.post('/', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if room exists
  const room = storage.rooms.find(r => r.roomId === roomId);
  if (!room) {
    return res.status(404).send({ error: 'Room not found' });
  }

  // Check if the room is already booked for the given date and time
  const isBooked = room.bookings.some(booking => 
    booking.date === date && 
    ((startTime >= booking.startTime && startTime < booking.endTime) || 
    (endTime > booking.startTime && endTime <= booking.endTime))
  );
  if (isBooked) {
    return res.status(400).send({ error: 'Room is already booked for the given date and time' });
  }

  const bookingId = storage.bookings.length + 1;
  const newBooking = { bookingId, customerName, date, startTime, endTime, roomId };
  room.bookings.push(newBooking);
  storage.bookings.push(newBooking);
  res.status(201).send(newBooking);
});

module.exports = router;
