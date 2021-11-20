const router = require('express').Router();
const {
    getAllBookings,
    createBooking, 
    getAvailableDates,
    editBooking,
    deleteBooking
} = require('../controllers/Booking.controller');

// get all bookings
router.get('/all', getAllBookings);

// create a booking
router.post('/add', createBooking)

// get all available bookings
router.get('/available', getAvailableDates);

// edit a booking
router.put('/edit/:findDate', editBooking);

router.delete('/delete/:date', deleteBooking);
module.exports = router;