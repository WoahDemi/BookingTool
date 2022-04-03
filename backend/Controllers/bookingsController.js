const express = require("express");
const bookings = express.Router();

const {
    getAllBookings,
    getOneBooking
} = require("../Queries/bookings")


bookings.get("/", async (req, res) => {
    let bookings = await getAllBookings();
    res.json(bookings);
  });
  
  bookings.get("/:id", async (req, res) => {
    const { id } = req.params;
    let booking = await getOneBooking(id);
    res.json(booking);
  });

  module.exports = bookings