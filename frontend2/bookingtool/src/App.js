// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Rooms from "./Pages/Rooms";
import Bookings from "./Pages/Bookings";
import Room from "./Pages/Room";
import New from "./Pages/New";
import Booking from "./Pages/Booking";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Rooms} />
          <Route path="/meetingrooms/new" component={New} />
          <Route exact path="/meetingrooms/:id" component={Room} />
          {/* <Route path="/meetingrooms" component={Rooms} /> */}
          <Route exact path="/bookings/:id" component={Booking} />
          <Route exact path="/bookings" component={Bookings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
