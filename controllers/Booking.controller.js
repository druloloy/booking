const Booking = require("../models/Booking.model");
const ExceptionHandler = require("../utils/ExceptionHandler");
const ManageDates = require("../utils/ManageDates");

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

exports.createBooking = async (req, res, next) => {
    const { title, date } = req.body;
    try {
        if(!title || !date) return new ExceptionHandler(400, "Please provide title and date");

        await Booking.create({
            title,
            date
        })
        .then(data=>{
            res.json({
                status: true,
                data
            })
        })
        .catch(err => {
            throw err;
        });
    } catch (error) {
        return next(error);
    }
}

exports.getAvailableDates = async (req, res, next) => {
    const { year, month } = req.body;
    try {

        const mgDates = new ManageDates(year, month);

        const data = await Booking.find({
            date: {
                '$gte': mgDates.startDate(),
                '$lte': mgDates.endDate()
            }
        })
        .then(result=>{
            const date = result.map(item=>item.date);
            if(date.length === 0) return res.json({  
                status: true,
                result: {
                    status: true,
                    data: []
                }
            });
            if(date.length === mgDates.endDay()) return res.json({  
                status: true,
                result: {
                    status: false,
                    message: "No available dates"
                }
            });
            const availableDates = mgDates.getAvailableDates(date);
            res.json({  
                status: true,
                result: {
                    status: true,
                    data: availableDates
                }
            });
        })
        .catch(err => {
            throw err;
        });
    } catch (error) {
        return next(error);
    }
}