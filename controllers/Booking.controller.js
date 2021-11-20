const Booking = require("../models/Booking.model");

exports.getAllBookings = async (req, res) => {
  try {
      await Booking.find()
        .then(data=>{
            res.json({
                status: "success",
                data
            })
        })
        .catch(err => {
            res.json({
                status: "error",
                message: err
            })
            throw err;
        });
  } catch (error) {
      console.log(error);
  }
};
