
import { Link } from "react-router-dom";
import styles from "./TicketCard.module.css";

const ETICHETE_TIP = {
    standard: "Standard",
    vip: "VIP",
    student: "Student"
};

export default function TicketCard({
    bilet,
    onToggle,
    onDelete
}) {
    return (
        <li
            className={`${styles.card} ${bilet.gata ? styles.done : ""}`}
            data-testid="item"
            data-id={bilet.id}
        >
            <div className={styles.main}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={bilet.gata}
                    onChange={() => onToggle(bilet.id)}
                    aria-label={`Marchează biletul pentru ${bilet.titlu} ca ${
                        bilet.gata ? "disponibil" : "vândut"
                    }`}
                    data-testid="item-toggle"
                />

                <div className={styles.content}>
                    <h3 className={styles.title}>
                        <Link
                            to={`/bilete/${bilet.id}`}
                            data-testid="item-link"
                        >
                            {bilet.titlu}
                        </Link>
                    </h3>

                    <span className={`badge badge-${bilet.tip}`}>
                        {ETICHETE_TIP[bilet.tip] ?? bilet.tip}
                    </span>

                    <p>Sala {bilet.sala}</p>
                    <p>Ora: {bilet.ora}</p>
                    <p>Loc: {bilet.loc}</p>
                    <p>Proiecție: {bilet.proiectie}</p>
                </div>
            </div>

            <div className={styles.actions}>
                <span className={styles.status}>
                    {bilet.gata ? "Vândut" : "Disponibil"}
                </span>

                <button
                    type="button"
                    className="btn-danger"
                    onClick={() => onDelete(bilet.id)}
                    aria-label={`Șterge biletul pentru ${bilet.titlu}`}
                    data-testid="item-delete"
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}
