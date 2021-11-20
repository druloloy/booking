const router = require('express').Router();
const {
    getAllBookings,
    createBooking, 
    getAvailableDates
} = require('../controllers/Booking.controller');

// get all bookings
router.get('/all', getAllBookings);

// create a booking
router.post('/add', createBooking)

// get all available bookings
router.get('/available', getAvailableDates);
module.exports = router;