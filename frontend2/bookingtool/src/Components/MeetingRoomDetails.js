import axios from "axios";
import moment from 'moment'
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateTimePicker from '@mui/lab/DateTimePicker';

const API = apiURL();

function MeetingRoomDetails() {
  const { id } = useParams();

  const [room, setRoom] = useState([]);
  const [booking, setBooking] = useState([]);
//   const [newBooking, setNewBooking] = useState({
//     meetingroom_id:"",
//     meeting_name: "",
//     starttime: "",
//     endtime: ""
// })


  useEffect(() => {
    const getRoomInfo = async () => {
      try {
       const res = await axios.get(`${API}/meetingrooms/${id}`);
       const bookingInfo = await axios.get(`${API}/meetingrooms/${id}/bookings`);
       setRoom(res.data)
       setBooking(bookingInfo.data)
      } catch (err) {
        console.log(err)
      }
    };
    getRoomInfo();
  }, []);
  
// const handleSubmit = (e) =>{
//   e.preventDefault()

// }




  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
<LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Start Time"
          // value={value}
          // onChange={handleChange}
        />
        <DateTimePicker
          label="End Time"
          // value={value}
          // onChange={handleChange}
        />
    </LocalizationProvider>
    <button>Submit</button>
    </form> */}
      <h2>{room.name}</h2>
      <li>Capacity: {room.capacity}</li>
      <li>Floor: {room.floor}</li>

    {booking.map((booked)=>{
      return <div>
      <li>{booked.meeting_name}</li>
       <li>Start: {moment(booking.starttime).format('MMMM Do YYYY  h:mm a')}</li>
       <li>Start: {moment(booking.starttime).format('MMMM Do YYYY  h:mm a')}</li>
       </div>
    })}

    </div>
  );
}

export default withRouter(MeetingRoomDetails);


// Displays the details of the meeting room and below it all its **future** bookings.

// Display a form to book the meeting room. The form must include Meeting Name, Start Date, End Date and Attendees input fields and a Submit button. The Attendees input should be optional and all others required. Show a success message upon successful booking creation and an error message otherwise.

// Should also display a list of all existing **future** bookings and when you click in one of the bookings of the list it should take the user to that booking's page/view.