const cors = require("cors");
const express = require("express");
const meetingRoomsController = require("./Controllers/meetingRoomsController");
const bookingsController = require("./Controllers/bookingsController")

const app = express();

app.use(cors());
app.use(express.json());
// app.use("/bookings")

//ROUTES
app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/meetingrooms", meetingRoomsController);
app.use("/bookings", bookingsController)

app.get("*", (req, res) => {
  res.status(404).send("Nothing here!");
});

module.exports = app;
