import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import moment from "moment";

const API = apiURL();
function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  const cancelBooking = async () => {
    try {
      await axios.delete(`${API}/bookings/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getTheBooking = async () => {
      try {
        const res = await axios.get(`${API}/bookings/${id}`);
        setBooking(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTheBooking();
  }, [id]);

  // const handleCancel = () => {
  //   let confirmation = window.confirm("Cancel Booking?");
  //   if (confirmation) {
  //     cancelBooking();
  //   }
  // };

  const handleCancel = async () => {
    await cancelBooking();
  };

  return (
    <div>
      <h1>{booking.name}</h1>
      <li>Start: {moment(booking.starttime).format('MMMM Do YYYY  h:mm a')}</li>
      <li>Start: {moment(booking.endtime).format('MMMM Do YYYY  h:mm a')}</li>
      <li>{booking.floor}</li>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default withRouter(BookingDetails);
