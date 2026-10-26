const ETICHETE_TIP = {
    standard: "Standard",
    vip: "VIP",
    student: "Student"
};

export default function TicketCard({ bilet, onToggle, onDelete }) {
    return (
        <li className={bilet.gata ? "ticket-card done" : "ticket-card"}>
            <label className="ticket-main">
                <input
                    type="checkbox"
                    checked={bilet.gata}
                    onChange={() => onToggle(bilet.id)}
                    aria-label={`Marchează biletul pentru ${bilet.titlu} ca ${
                        bilet.gata ? "disponibil" : "vândut"
                    }`}
                />

                <div>
                    <h3>{bilet.titlu}</h3>

                    <span className={`badge badge-${bilet.tip}`}>
                        {ETICHETE_TIP[bilet.tip]}
                    </span>

                    <p>Sala {bilet.sala}</p>
                    <p>Ora: {bilet.ora}</p>
                    <p>Loc: {bilet.loc}</p>
                    <p>Proiecție: {bilet.proiectie}</p>
                </div>
            </label>

            <div className="ticket-actions">
                <span className="status">
                    {bilet.gata ? "Vândut" : "Disponibil"}
                </span>

                <button
                    type="button"
                    className="btn-danger"
                    onClick={() => onDelete(bilet.id)}
                    aria-label={`Șterge biletul pentru ${bilet.titlu}`}
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}