
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchBilet } from "../api.js";
import styles from "./BiletDetaliuPage.module.css";

const ETICHETE_TIP = {
    standard: "Standard",
    vip: "VIP",
    student: "Student"
};

export default function BiletDetaliuPage() {
    const { id } = useParams();

    const [stare, setStare] = useState({
        id: null,
        bilet: null,
        error: null
    });

    // GET - Încărcarea unui singur bilet
    useEffect(() => {
        let ignore = false;

        fetchBilet(id)
            .then((data) => {
                if (!ignore) {
                    setStare({
                        id,
                        bilet: data,
                        error: null
                    });
                }
            })
            .catch((err) => {
                if (!ignore) {
                    setStare({
                        id,
                        bilet: null,
                        error: err.message
                    });
                }
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    // Afișăm încărcarea până la primirea răspunsului
    const loading = stare.id !== id;

    if (loading) {
        return (
            <div className={styles.message}>
                <p className="info" data-testid="loading">
                    Se încarcă detaliile biletului...
                </p>
            </div>
        );
    }

    // Afișăm eroarea dacă biletul nu există
    if (stare.error || !stare.bilet) {
        return (
            <div className={styles.message}>
                <section className="panel">
                    <p className="error" data-testid="error">
                        Biletul nu a putut fi încărcat:{" "}
                        {stare.error ?? "Bilet inexistent."}
                    </p>

                    <Link to="/" className={styles.backLink}>
                        Înapoi la bilete
                    </Link>
                </section>
            </div>
        );
    }

    const bilet = stare.bilet;

    return (
        <div className={styles.container}>
            <section
                className={`panel ${styles.card}`}
                data-testid="detail"
            >
                <Link to="/" className={styles.backLink}>
                    Înapoi la bilete
                </Link>

                <h2
                    className={`${styles.title} ${
                        bilet.gata ? styles.done : ""
                    }`}
                    data-testid="detail-title"
                >
                    {bilet.titlu}
                </h2>

                <div className={styles.badgeWrapper}>
                    <span className={`badge badge-${bilet.tip}`}>
                        {ETICHETE_TIP[bilet.tip] ?? bilet.tip}
                    </span>
                </div>

                <dl className={styles.details}>
                    <dt>Sală</dt>
                    <dd>{bilet.sala}</dd>

                    <dt>Ora proiecției</dt>
                    <dd>{bilet.ora}</dd>

                    <dt>Loc</dt>
                    <dd>{bilet.loc}</dd>

                    <dt>Tipul proiecției</dt>
                    <dd>{bilet.proiectie}</dd>

                    <dt>Stare</dt>
                    <dd>
                        {bilet.gata ? "Vândut" : "Disponibil"}
                    </dd>

                    <dt>ID bilet</dt>
                    <dd>{bilet.id}</dd>
                </dl>
            </section>
        </div>
    );
}
