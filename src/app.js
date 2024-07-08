const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/rooms');
const bookingRoutes = require('./routes/bookings');
const customerRoutes = require('./routes/customers');

const app = express();

app.use(bodyParser.json());
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);
app.use('/customers', customerRoutes);

module.exports = app;
