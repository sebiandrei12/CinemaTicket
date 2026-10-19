import TicketList from "./components/TicketList.jsx";

const bilete = [
    {
        id: 1,
        titlu: "Avatar",
        gata: false,
        tip: "standard",
        sala: 4,
        ora: "19:30",
        loc: "A12",
        proiectie: "2D"
    },
    {
        id: 2,
        titlu: "Oppenheimer",
        gata: true,
        tip: "vip",
        sala: 2,
        ora: "21:00",
        loc: "B07",
        proiectie: "IMAX"
    },
    {
        id: 3,
        titlu: "Dune: Part Two",
        gata: false,
        tip: "student",
        sala: 1,
        ora: "18:00",
        loc: "C15",
        proiectie: "3D"
    }
];

export default function App() {
    const active = bilete.filter((bilet) => !bilet.gata).length;

    return (
        <>
            <header className="app-header">
                <h1>CinemaTicket</h1>
                <p>Sistem de gestionare a vânzărilor de bilete pentru cinema.</p>
                <p className="app-count">
                    {bilete.length} bilete, dintre care {active} disponibile
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Biletele mele</h2>
                    <TicketList bilete={bilete} />
                </section>
            </main>
        </>
    );
}