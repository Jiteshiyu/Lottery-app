export default function BuyTicket({ action }) {
  return (
    <button className="ticket-btn" onClick={action}>
      Get New Ticket
    </button> // Button to buy a new ticket
  );
}
