import { useState } from "react";
import { genTicket } from "../helper.js";
import BuyTicket from "./Buy.jsx";
import Ticket from "./Ticket.jsx";

export default function Lottery({ ticketSize = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(ticketSize));

  let buyTicket = () => {
    setTicket(genTicket(ticketSize));
  };

  let isWinning = winCondition(ticket);

  return (
    <div className="lottery-app">
      <h1 className="app-heading">Lottery Game!</h1>
      <Ticket ticket={ticket}></Ticket>
      <h3 className="win-title">{isWinning && "Congratulations you won!"}</h3>
      <BuyTicket action={buyTicket} />
    </div>
  );
}
