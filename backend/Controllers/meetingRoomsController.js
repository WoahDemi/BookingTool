const express = require("express");
const meetingrooms = express.Router();

const {
  getAllRooms,
  getOneRoom,
  createRoom,
} = require("../Queries/meetingRooms");

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

module.exports = meetingrooms;
