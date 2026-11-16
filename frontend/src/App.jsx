
import { useEffect, useState } from "react";
import TicketList from "./components/TicketList.jsx";
import BiletForm from "./components/BiletForm.jsx";

import {
    createBilet,
    deleteBilet,
    fetchBilete,
    updateBilet
} from "./api.js";

// Tema inițială este preluată din setările sistemului
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

    // GET - Încărcarea biletelor de la API
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

    // POST - Adăugarea unui bilet pe server
    async function handleAdd(bilet) {
        const creat = await createBilet(bilet);

        // Actualizăm lista doar după confirmarea serverului
        setBilete((prev) => [...prev, creat]);
    }

    // PATCH - Modificarea stării unui bilet pe server
    async function handleToggle(id) {
        const bilet = bilete.find((b) => b.id === id);

        if (!bilet) return;

        try {
            setError(null);

            const actualizat = await updateBilet(id, {
                gata: !bilet.gata
            });

            // Folosim obiectul întors de server
            setBilete((prev) =>
                prev.map((b) =>
                    b.id === id ? actualizat : b
                )
            );
        } catch (err) {
            setError(err.message);
        }
    }

    // DELETE - Ștergerea definitivă a unui bilet
    async function handleDelete(id) {
        try {
            setError(null);

            await deleteBilet(id);

            // Eliminăm biletul doar după confirmarea serverului
            setBilete((prev) =>
                prev.filter((b) => b.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    }

    // Schimbarea temei luminoase / întunecate
    function handleTema() {
        const nouaTema = tema === "dark" ? "light" : "dark";

        setTema(nouaTema);
        document.documentElement.dataset.theme = nouaTema;
    }

    // Calcularea numărului de bilete disponibile
    const active = bilete.filter((b) => !b.gata).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark"
                        ? "Mod luminos"
                        : "Mod întunecat"}
                </button>

                <h1>CinemaTicket</h1>

                <p>
                    Sistem de gestionare a vânzărilor
                    de bilete pentru cinema.
                </p>

                <p className="app-count">
                    {bilete.length} bilete, dintre care{" "}
                    {active} disponibile
                </p>
            </header>

            <main className="container">
                <section className="panel">
                    <h2>Adaugă bilet</h2>

                    <BiletForm onAdd={handleAdd} />
                </section>

                <section className="panel">
                    <h2>Biletele mele</h2>

                    {loading && (
                        <p
                            className="info"
                            data-testid="loading"
                        >
                            Se încarcă biletele...
                        </p>
                    )}

                    {error && (
                        <p
                            className="error"
                            data-testid="error"
                        >
                            Nu am putut efectua operația:{" "}
                            {error}
                        </p>
                    )}

                    {!loading && (
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
