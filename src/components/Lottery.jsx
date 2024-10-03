import { useState } from "react";
import { genTicket } from "../helper.js";
import BuyTicket from "./Buy.jsx";
import Ticket from "./Ticket.jsx";

export default function Lottery({ ticketSize = 3, winCondition }) {
  // Initialize ticket state
  let [ticket, setTicket] = useState(genTicket(ticketSize));

  // Generate a new ticket
  let buyTicket = () => {
    setTicket(genTicket(ticketSize));
  };

  // Check if the current ticket is a winning ticket
  let isWinning = winCondition(ticket);

  return (
    // Lottery App
    <div className="lottery-app">
      <h1 className="app-heading">Luckydrawz!</h1>
      {/* Display the ticket */}
      <Ticket ticket={ticket}></Ticket>
      {/* Winning message */}
      <h3 className="win-title">{isWinning && "Congratulations you won !"}</h3>
      {/* Button to buy a new ticket */}
      <BuyTicket action={buyTicket} />
    </div>
  );
}
