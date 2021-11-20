const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
},
{
    timestamps: true
});
