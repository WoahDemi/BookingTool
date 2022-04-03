import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const BookingsList = () =>{
    const [bookings, setBookings] = useState([]);

    // useEffect(() => {
	// 	const fetchRooms = async () => {
	// 		try {
	// 			const res = await axios.get(`${API}/meetingrooms`);
	// 			console.log(res.data)
	// 			setRooms(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
		
	// 	fetchRooms();
	// }, []);

    return(
        <div>
        </div>
    )
}

export default BookingsList