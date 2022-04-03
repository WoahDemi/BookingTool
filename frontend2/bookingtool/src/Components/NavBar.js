import {Link} from "react-router-dom"


const NavBar = () => {
    return(
        <nav>
            {/* <Link to ='/'>Home</Link> */}
            <Link to ='/'>Meeting Rooms</Link>
            <Link to ='/bookings'>Bookings</Link>
            <Link to='/meetingrooms/new'>New Room</Link>    
        </nav>
    )
    } 
    
    export default NavBar;