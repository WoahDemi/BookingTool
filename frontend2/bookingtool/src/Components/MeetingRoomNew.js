import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

function MeetingRoomNewForm() {

  const addMeetingRoom = async (newRoom) => {
    try {
      await axios.post(`${API}/bookings`, newRoom);
      window.alert("Success! See you then")
    } catch (err) {
      console.log(err);
    }
  };

  const [room, setRoom] = useState({
    name: "",
    floor: "",
    capacity: "",
  });

  const handleTextChange = (event) => {
    setRoom({ ...room, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMeetingRoom(room);
    event.target.reset()
  };
  
  return (
    <div className="RoomForm">
      <h1>Create a Room</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Room Name:</label>
        <input
          id="name"
          value={room.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Room"
          required
        />
        <label htmlFor="floor">Floor:</label>
        <input
          id="floor"
          type="number"
          min="1"
          required
          value={room.floor}
          placeholder="Floor Number"
          onChange={handleTextChange}
        />
        <label htmlFor="capacity">Capacity:</label>
        <input
          id="capacity"
          type="number"
          name="capacity"
          step="1"
          min="1"
          value={room.capacity}
          placeholder="Room Capacity"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(MeetingRoomNewForm);
