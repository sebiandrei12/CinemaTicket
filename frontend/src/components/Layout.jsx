
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

// Detectează tema inițială a sistemului
function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// Marchează automat pagina activă în meniu
function navClass({ isActive }) {
    return isActive
        ? `${styles.link} ${styles.active}`
        : styles.link;
}

export default function Layout() {
    const [tema, setTema] = useState(temaInitiala);

    // Schimbarea temei luminoase / întunecate
    function handleTema() {
        const nouaTema = tema === "dark" ? "light" : "dark";

        setTema(nouaTema);
        document.documentElement.dataset.theme = nouaTema;
    }

    return (
        <>
            <header className={styles.header}>
                <button
                    type="button"
                    className={styles.themeToggle}
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark"
                        ? "Mod luminos"
                        : "Mod întunecat"}
                </button>

                <h1>CinemaTicket</h1>

                <p>
                    Sistem de gestionare a vânzărilor de bilete
                    pentru cinema.
                </p>

                <nav
                    className={styles.nav}
                    data-testid="nav"
                    aria-label="Navigare principală"
                >
                    <NavLink
                        to="/"
                        end
                        className={navClass}
                    >
                        Bilete
                    </NavLink>

                    <NavLink
                        to="/despre"
                        className={navClass}
                    >
                        Despre
                    </NavLink>
                </nav>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                Proiect Tehnologii Web – CinemaTicket
            </footer>
        </>
    );
}
