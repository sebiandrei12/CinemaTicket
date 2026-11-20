
import styles from "./DesprePage.module.css";

export default function DesprePage() {
    return (
        <div className={styles.container}>
            <section className={`panel ${styles.card}`}>
                <h2 className={styles.title}>
                    Despre CinemaTicket
                </h2>

                <p className={styles.description}>
                    CinemaTicket este o aplicație web pentru
                    gestionarea biletelor de cinema, realizată
                    în cadrul proiectului de la disciplina
                    Tehnologii Web.
                </p>

                <p className={styles.description}>
                    Aplicația permite adăugarea biletelor,
                    afișarea listei, modificarea stării
                    disponibile sau vândute, ștergerea
                    biletelor și vizualizarea detaliilor
                    fiecărui bilet.
                </p>

                <h3 className={styles.subtitle}>
                    Tehnologii utilizate
                </h3>

                <ul className={styles.list}>
                    <li>React – componente și interfață</li>
                    <li>Vite – dezvoltare și compilare</li>
                    <li>React Router – navigare între pagini</li>
                    <li>CSS Modules – stilizare pe componente</li>
                    <li>JSON Server – API pentru bilete</li>
                    <li>Fetch API – comunicare cu serverul</li>
                </ul>

                <h3 className={styles.subtitle}>
                    Funcționalități
                </h3>

                <ul className={styles.list}>
                    <li>Adăugarea biletelor cu validarea datelor</li>
                    <li>Vizualizarea tuturor biletelor</li>
                    <li>Accesarea detaliilor unui bilet</li>
                    <li>Schimbarea stării disponibil/vândut</li>
                    <li>Ștergerea biletelor</li>
                    <li>Temă luminoasă și întunecată</li>
                    <li>Navigare fără reîncărcarea paginii</li>
                </ul>
            </section>
        </div>
    );
}
