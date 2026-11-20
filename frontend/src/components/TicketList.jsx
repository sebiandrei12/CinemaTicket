
import TicketCard from "./TicketCard.jsx";
import styles from "./TicketList.module.css";

export default function TicketList({
    bilete,
    onToggle,
    onDelete
}) {
    // Mesaj afișat atunci când nu există bilete
    if (bilete.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                Nu există niciun bilet.
            </p>
        );
    }

    // Afișarea listei de bilete
    return (
        <ul className={styles.list}>
            {bilete.map((bilet) => (
                <TicketCard
                    key={bilet.id}
                    bilet={bilet}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
