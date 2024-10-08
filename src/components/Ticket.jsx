import TicketNum from "./TicketNum.jsx";

export default function Ticket({ ticket }) {
  return (
    // Render each ticket number
    <p className="ticket">
      Ticket :{" "}
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} /> 
      ))}
    </p>
  );
}
