import axios from "axios";
import moment from "moment" 
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import {Link} from "react-router-dom"


const API = apiURL();

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`${API}/bookings`);
        console.log(res.data);
        setBookings(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      {bookings.map((booking) => {
        return <Link to={`/bookings/${booking.id}`}><div > <h2>{booking.meeting_name}</h2>
				<h4>{booking.meetingroom_name}</h4>
				<li>Start: {moment(booking.starttime).format('MMMM Do YYYY  h:mm a')}</li>
				<li>End: {moment(booking.endtime).format('MMMM Do YYYY  h:mm a')}</li>
				<li>{booking.floor}</li>
				</div>
        </Link>
      })}
    </div>
  );
};

export default BookingsList;