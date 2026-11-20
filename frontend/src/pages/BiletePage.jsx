
import { useEffect, useState } from "react";

import TicketList from "../components/TicketList.jsx";
import BiletForm from "../components/BiletForm.jsx";

import {
    createBilet,
    deleteBilet,
    fetchBilete,
    updateBilet
} from "../api.js";

import styles from "./BiletePage.module.css";

export default function BiletePage() {
    const [bilete, setBilete] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // GET - Încărcarea biletelor de pe server
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

    // POST - Adăugarea unui bilet
    async function handleAdd(bilet) {
        const creat = await createBilet(bilet);

        setBilete((prev) => [...prev, creat]);
    }

    // PATCH - Schimbarea stării unui bilet
    async function handleToggle(id) {
        const bilet = bilete.find((b) => b.id === id);

        if (!bilet) return;

        try {
            setError(null);

            const actualizat = await updateBilet(id, {
                gata: !bilet.gata
            });

            setBilete((prev) =>
                prev.map((b) =>
                    b.id === id ? actualizat : b
                )
            );
        } catch (err) {
            setError(err.message);
        }
    }

    // DELETE - Ștergerea unui bilet
    async function handleDelete(id) {
        try {
            setError(null);

            await deleteBilet(id);

            setBilete((prev) =>
                prev.filter((b) => b.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    }

    // Numărul biletelor disponibile
    const active = bilete.filter((b) => !b.gata).length;

    return (
        <div className={styles.container}>
            <section className={`panel ${styles.section}`}>
                <h2>Adaugă bilet</h2>

                <BiletForm onAdd={handleAdd} />
            </section>

            <section className={`panel ${styles.section}`}>
                <h2>Biletele mele</h2>

                <p className={styles.count}>
                    {bilete.length} bilete, dintre care{" "}
                    {active} disponibile
                </p>

                {loading && (
                    <p className="info" data-testid="loading">
                        Se încarcă biletele...
                    </p>
                )}

                {error && (
                    <p className="error" data-testid="error">
                        Nu am putut efectua operația: {error}
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
        </div>
    );
}
