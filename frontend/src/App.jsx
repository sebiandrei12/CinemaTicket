import { useState } from "react";
import TicketList from "./components/TicketList.jsx";

// Datele inițiale ale biletelor
const BILETE_INITIALE = [
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

// Tema inițială preluată din setările sistemului
function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function App() {
    const [bilete, setBilete] = useState(BILETE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    // Schimbă starea unui bilet fără să modifice direct lista
    function handleToggle(id) {
        setBilete((prev) =>
            prev.map((bilet) =>
                bilet.id === id
                    ? { ...bilet, gata: !bilet.gata }
                    : bilet
            )
        );
    }

    // Șterge un bilet din listă
    function handleDelete(id) {
        setBilete((prev) =>
            prev.filter((bilet) => bilet.id !== id)
        );
    }

    // Comută tema aplicației
    function handleTema() {
        const nouaTema = tema === "dark" ? "light" : "dark";

        setTema(nouaTema);
        document.documentElement.dataset.theme = nouaTema;
    }

    // Numărul biletelor disponibile este derivat din lista curentă
    const active = bilete.filter((bilet) => !bilet.gata).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>

                <h1>CinemaTicket</h1>

                <p>
                    Sistem de gestionare a vânzărilor de bilete pentru cinema.
                </p>

                <p className="app-count">
                    {bilete.length} bilete, dintre care {active} disponibile
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Biletele mele</h2>

                    <TicketList
                        bilete={bilete}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                </section>
            </main>
        </>
    );
}