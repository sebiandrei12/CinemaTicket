
import { useState } from "react";
import styles from "./BiletForm.module.css";

const TIPURI = [
    { value: "standard", label: "Standard" },
    { value: "vip", label: "VIP" },
    { value: "student", label: "Student" }
];

const PROIECTII = ["2D", "3D", "IMAX"];
const TITLU_MAX = 100;

export default function BiletForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [tip, setTip] = useState("standard");
    const [sala, setSala] = useState("1");
    const [ora, setOra] = useState("19:00");
    const [loc, setLoc] = useState("");
    const [proiectie, setProiectie] = useState("2D");

    const [eroare, setEroare] = useState("");
    const [trimite, setTrimite] = useState(false);

    // Validarea datelor înainte de trimitere
    function valideaza() {
        const titluCurat = titlu.trim();

        if (titluCurat === "") {
            return "Titlul filmului este obligatoriu.";
        }

        if (titluCurat.length > TITLU_MAX) {
            return `Titlul poate avea maximum ${TITLU_MAX} de caractere.`;
        }

        if (!TIPURI.some((t) => t.value === tip)) {
            return "Tipul biletului este invalid.";
        }

        if (
            sala.trim() === "" ||
            !Number.isInteger(Number(sala)) ||
            Number(sala) < 1 ||
            Number(sala) > 20
        ) {
            return "Sala trebuie să fie un număr între 1 și 20.";
        }

        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(ora)) {
            return "Ora trebuie să fie în format HH:MM.";
        }

        if (!/^[A-Za-z]\d{1,3}$/.test(loc.trim())) {
            return "Locul trebuie să fie de forma A12 sau B07.";
        }

        if (!PROIECTII.includes(proiectie)) {
            return "Tipul proiecției este invalid.";
        }

        return "";
    }

    // Trimiterea formularului către componenta părinte
    async function handleSubmit(e) {
        e.preventDefault();

        // Prevenim trimiterea dublă
        if (trimite) return;

        const mesaj = valideaza();

        if (mesaj) {
            setEroare(mesaj);
            return;
        }

        setEroare("");
        setTrimite(true);

        try {
            // Serverul salvează înainte ca formularul să fie golit
            await onAdd({
                titlu: titlu.trim(),
                tip,
                sala: Number(sala),
                ora,
                loc: loc.trim().toUpperCase(),
                proiectie,
                gata: false
            });

            // Resetăm câmpurile numai după salvarea reușită
            setTitlu("");
            setTip("standard");
            setSala("1");
            setOra("19:00");
            setLoc("");
            setProiectie("2D");

        } catch (err) {
            // Datele rămân în formular dacă API-ul eșuează
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            data-testid="form"
        >
            <label>
                Titlul filmului
                <input
                    type="text"
                    value={titlu}
                    onChange={(e) => setTitlu(e.target.value)}
                    placeholder="Ex: Avatar"
                    maxLength={TITLU_MAX}
                    aria-invalid={Boolean(eroare)}
                    data-testid="form-title"
                />
            </label>

            <label>
                Tipul biletului
                <select
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    data-testid="form-tip"
                >
                    {TIPURI.map((t) => (
                        <option key={t.value} value={t.value}>
                            {t.label}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Sala
                <input
                    type="number"
                    min="1"
                    max="20"
                    value={sala}
                    onChange={(e) => setSala(e.target.value)}
                    data-testid="form-sala"
                />
            </label>

            <label>
                Ora proiecției
                <input
                    type="time"
                    value={ora}
                    onChange={(e) => setOra(e.target.value)}
                    data-testid="form-ora"
                />
            </label>

            <label>
                Loc
                <input
                    type="text"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    placeholder="Ex: A12"
                    data-testid="form-loc"
                />
            </label>

            <label>
                Tipul proiecției
                <select
                    value={proiectie}
                    onChange={(e) => setProiectie(e.target.value)}
                    data-testid="form-proiectie"
                >
                    {PROIECTII.map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </select>
            </label>

            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}

            <button
                type="submit"
                className={styles.submit}
                disabled={trimite}
                data-testid="form-submit"
            >
                {trimite ? "Se salvează..." : "Adaugă bilet"}
            </button>
        </form>
    );
}
