
import { useEffect, useState } from "react";
import TicketList from "./components/TicketList.jsx";
import { fetchBilete } from "./api.js";

// Tema inițială preluată din setările sistemului
function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function App() {
    const [bilete, setBilete] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState(temaInitiala);

    // Etapa 6: încărcarea biletelor de la API
    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchBilete();

                if (!ignore) {
                    setBilete(data);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, []);

    // Schimbă starea unui bilet
    function handleToggle(id) {
        setBilete((prev) =>
            prev.map((bilet) =>
                bilet.id === id
                    ? { ...bilet, gata: !bilet.gata }
                    : bilet
            )
        );
    }

    // Șterge un bilet
    function handleDelete(id) {
        setBilete((prev) =>
            prev.filter((bilet) => bilet.id !== id)
        );
    }

    // Schimbă tema luminoasă / întunecată
    function handleTema() {
        const nouaTema = tema === "dark" ? "light" : "dark";

        setTema(nouaTema);
        document.documentElement.dataset.theme = nouaTema;
    }

    // Calculează automat biletele disponibile
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

                    {loading && (
                        <p className="info">Se încarcă biletele...</p>
                    )}

                    {error && (
                        <p className="error">
                            Nu am putut încărca biletele: {error}.
                            Verifică dacă serverul este pornit cu{" "}
                            <code>npm run api</code>.
                        </p>
                    )}

                    {!loading && !error && (
                        <TicketList
                            bilete={bilete}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    )}
                </section>
            </main>
        </>
    );
}
