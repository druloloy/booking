require('dotenv').config({path: './secrets/config.env'});
const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./secrets/dbConn');


const app = express();

// use cors middleware
app.use(cors());

// parse application/json
app.use(express.json());

// limit method requests
app.use(require('./middlewares/limitRequest'));


// add route /booking
app.use('/booking', require('./routes/Booking.route'));



const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// connect to database
connectToDB();

// error handler middleware
app.use(require('./middlewares/errorHandler'));

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

