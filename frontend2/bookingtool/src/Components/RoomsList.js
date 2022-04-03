import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const RoomsList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(`${API}/meetingrooms`);
        console.log(res.data);
        setRooms(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      {rooms.map((room) => {
        return <li>{room.name}</li>
      })}
    </div>
  );
};

export default RoomsList;
