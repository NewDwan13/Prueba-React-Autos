import "./App.css";
import { Header } from "./menu/Header";
import { Booking } from "./booking/booking";
import { Announcement } from "./announcement/announcement";
import { Poll } from "./poll/poll";

function App() {
  return (
    <>
      <Header />
      <Booking />
      <Announcement />
      <Poll />
    </>
  );
}

export default App;
