const router = require('express').Router();
const {
    getAllBookings
} = require('../controllers/Booking.controller');

router.get('/all', getAllBookings);

module.exports = router;