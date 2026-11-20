
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <div className={styles.container}>
            <section
                className={`panel ${styles.card}`}
                data-testid="not-found"
            >
                <h2 className={styles.code}>404</h2>

                <h3 className={styles.title}>
                    Pagina nu a fost găsită
                </h3>

                <p className={styles.description}>
                    Adresa pe care ai introdus-o nu există
                    în aplicația CinemaTicket.
                </p>

                <Link to="/" className={styles.backLink}>
                    Înapoi la bilete
                </Link>
            </section>
        </div>
    );
}
