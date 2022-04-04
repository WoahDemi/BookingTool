const db = require("../db/dbconfig")


const getAllBookings = async() =>{
    try {
        const allBookings = await db.any("SELECT * FROM bookings")
        return allBookings
    } catch (error) {
        console.log(error)
    }
}

const getOneBooking = async (meetingroom_id) => {
    try {
      const booking = await db.one(`SELECT * FROM bookings WHERE id = $1`, meetingroom_id);
      return booking;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllForOne = async (meetingroom_id) => {
    try {
      const allForONe = await db.any(`SELECT * FROM bookings WHERE meetingroom_id = $1 AND starttime >= NOW()`, meetingroom_id);
      return allForONe;
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
    getAllBookings,
    getOneBooking,
    getAllForOne
}