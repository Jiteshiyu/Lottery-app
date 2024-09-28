import { useState } from "react";
import { genTicket } from "../helper.js";
import BuyTicket from "./Buy.jsx";
import Ticket from "./Ticket.jsx";

export default function Lottery({ ticketSize = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(ticketSize)); // Initialize ticket state

  let buyTicket = () => {
    setTicket(genTicket(ticketSize)); // Generate a new ticket
  };

  let isWinning = winCondition(ticket); // Check if the current ticket is a winning ticket

  return (
    <div className="lottery-app">
      <h1 className="app-heading">Lottery Game!</h1>
      <Ticket ticket={ticket}></Ticket> {/* Display the ticket */}
      <h3 className="win-title">{isWinning && "Congratulations you won!"}</h3> {/* Winning message */}
      <BuyTicket action={buyTicket} /> {/* Button to buy a new ticket */}
    </div>
  );
}
