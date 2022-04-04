const express = require("express");
const meetingrooms = express.Router();

const {
  getAllRooms,
  getOneRoom,
  createRoom,
} = require("../Queries/meetingRooms");
const {getAllForOne} = require("../Queries/bookings")

meetingrooms.get("/", async (req, res) => {
  let rooms = await getAllRooms();
  res.json(rooms);
});

meetingrooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  let room = await getOneRoom(id);
  res.json(room);
});

meetingrooms.post("/", async (req, res) => {
  let newRoom = await createRoom(req.body);
  res.json(newRoom);
});

meetingrooms.get("/:id/bookings", async (req, res) => {
  const { id } = req.params;
  let booking = await getAllForOne(id);
  res.json(booking);
});

module.exports = meetingrooms;
