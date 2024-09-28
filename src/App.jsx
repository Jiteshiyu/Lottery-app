import "./App.css";
import { sum } from "./helper.js";
import Lottery from "./components/Lottery.jsx";

function App() {
  // Winning condition
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]); // Alternative condition
  };

  return (
    <>
      <Lottery ticketSize={3} winCondition={winCondition} /> {/* Render Lottery component */}
    </>
  );
}

export default App;
