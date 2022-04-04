import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import {Link} from "react-router-dom"


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
        return <Link to={`/meetingrooms/${room.id}`}> <div>
          <h2>{room.name}</h2>
          <li>Capacity: {room.capacity}</li>
          <li>Floor: {room.floor}</li>
          </div>
          </Link>
      })}
      </div>
  );
};



export default RoomsList;
