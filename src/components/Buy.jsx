export default function BuyTicket({ action }) {
  return (
    // Button to buy a new ticket
    <button className="ticket-btn" onClick={action}>
      Get New Ticket
    </button>
  );
}
