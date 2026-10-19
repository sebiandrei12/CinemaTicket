
import TicketCard from "./TicketCard.jsx";

export default function TicketList({ bilete }) {
    if (bilete.length === 0) {
        return <p className="empty">Nu există niciun bilet.</p>;
    }

    return (
        <ul className="ticket-list">
            {bilete.map((bilet) => (
                <TicketCard key={bilet.id} bilet={bilet} />
            ))}
        </ul>
    );
}