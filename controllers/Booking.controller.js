const Booking = require("../models/Booking.model");
const ExceptionHandler = require("../utils/ExceptionHandler");

exports.getAllBookings = async (req, res, next) => {
  try {
      await Booking.find()
        .then(data=>{
            res.json({
                status: true,
                data
            })
        })
        .catch(err => {
            res.json({
                status: true,
                message: err
            })
            throw err;
        });
  } catch (error) {
      return next(error);
  }
};
