import "./App.css";
import { sum } from "./helper.js";
import Lottery from "./components/Lottery.jsx";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
      <Lottery ticketSize={3} winCondition={winCondition}></Lottery>
    </>
  );
}

export default App;
