const db = require("../db/dbconfig");

const getAllRooms = async () => {
  try {
    const allRooms = await db.any("SELECT * FROM meetingrooms");
    return allRooms;
  } catch (error) {
    console.log(error);
  }
};

const getOneRoom = async (id) => {
  try {
    const room = await db.one(`SELECT * FROM meetingrooms WHERE id = $1`, id);
    return room;
  } catch (error) {
    console.log(error);
  }
};

const createRoom = async (newRoom) => {
  const { name, capacity, floor } = newRoom;
  try {
    const theRoom = await db.one(
      `INSERT INTO meetingrooms(name, capacity, floor) Values($1,$2,$3) RETURNING *`,
      [name, capacity, floor]
    );
    return theRoom;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createRoom,
};
