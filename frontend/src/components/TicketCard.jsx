
const ETICHETE_TIP = {
    standard: "Standard",
    vip: "VIP",
    student: "Student"
};

export default function TicketCard({ bilet }) {
    return (
        <li className={bilet.gata ? "ticket-card done" : "ticket-card"}>
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

            <span className="status">
                {bilet.gata ? "Vândut" : "Disponibil"}
            </span>
        </li>
    );
}