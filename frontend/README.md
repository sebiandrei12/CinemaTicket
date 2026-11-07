
# CinemaTicket – Proiect Tehnologii Web

## Descriere

CinemaTicket este o aplicație web pentru gestionarea biletelor de cinema, dezvoltată în cadrul disciplinei Tehnologii Web.

Aplicația permite afișarea biletelor, vizualizarea informațiilor despre filme și proiecții, modificarea stării biletelor și ștergerea acestora.

Proiectul a fost dezvoltat progresiv, pornind de la HTML și CSS, continuând cu JavaScript și React, iar în Etapa 6 a fost introdusă încărcarea datelor printr-un API REST.

## Tehnologii utilizate

- HTML5
- CSS3
- JavaScript
- React
- Vite
- JSX
- React Hooks: useState și useEffect
- Fetch API
- JSON
- json-server 0.17.4
- Git și GitHub
- Visual Studio Code

## Structura proiectului

```text
CinemaTicket/
├── ai-log/
│   ├── etapa-01.md
│   ├── etapa-02.md
│   ├── etapa-03.md
│   ├── etapa-04.md
│   ├── etapa-05.md
│   └── etapa-06.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TicketCard.jsx
│   │   │   └── TicketList.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── cinema.js
│   ├── .env.example
│   ├── db.json
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
└── mockup/
    ├── cinema.js
    ├── index.html
    ├── style.css
    └── README.md
```

Directorul `mockup` păstrează versiunea inițială a aplicației, realizată cu HTML, CSS și JavaScript.

Directorul `frontend` conține aplicația React dezvoltată începând cu Etapa 3.

Documentația utilizării AI este organizată în directorul `ai-log`.

---

## Etapa 1 – Interfața HTML și CSS

În prima etapă a fost creată interfața inițială pentru aplicația CinemaTicket.

### Funcționalități

- Structură HTML semantică.
- Antet cu numele și descrierea aplicației.
- Formular demonstrativ pentru introducerea datelor.
- Trei bilete demonstrative.
- Evidențierea biletelor disponibile și vândute.
- Etichete pentru tipurile de bilete.
- Layout realizat folosind CSS Grid și Flexbox.
- Design responsive.
- Efecte hover și focus vizibil.
- Suport pentru temă întunecată.

### Verificare

Interfața inițială a fost verificată în browser folosind extensia Live Server.

Documentație AI: `../ai-log/etapa-01.md`

---

## Etapa 2 – Logica JavaScript

În Etapa 2 a fost implementată logica de manipulare a datelor folosind JavaScript, fără interacțiune cu DOM-ul.

### Funcționalități

- Stocarea biletelor într-un array de obiecte.
- Listarea titlurilor filmelor.
- Numărarea biletelor disponibile.
- Căutarea biletelor după titlu și ID.
- Adăugarea biletelor cu validare.
- Generarea identificatorilor unici.
- Modificarea stării unui bilet.
- Ștergerea unui bilet.
- Actualizarea imutabilă a datelor.

### Metode JavaScript utilizate

- `map()` – transformarea elementelor.
- `filter()` – filtrarea elementelor.
- `find()` – căutarea elementelor.
- `reduce()` – agregarea datelor.

Funcțiile au fost verificate prin teste executate în consola browserului.

### Stage 2 Verification Checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S2-R1 | JavaScript linked correctly | `mockup/index.html` | Open Console |
| S2-R2 | At least three sample tickets | `mockup/cinema.js` | Inspect array |
| S2-R3 | Data manipulation functions | `mockup/cinema.js` | Run console tests |
| S2-R4 | Input validation | `mockup/cinema.js` | Test invalid inputs |
| S2-R5 | Immutable operations | `mockup/cinema.js` | Check original array |
| S2-R6 | README and AI log | `../ai-log/etapa-02.md` | Read documentation |
| S2-R7 | GitHub publication | Git history | Check Stage 2 commit |

Documentație AI: `../ai-log/etapa-02.md`

---

## Etapa 3 – React și Vite

În această etapă, aplicația a fost migrată la React folosind Vite.

### Implementare

- Crearea aplicației React în directorul `frontend`.
- Configurarea proiectului cu Vite.
- Crearea componentei principale `App.jsx`.
- Configurarea fișierului `main.jsx`.
- Reutilizarea stilurilor CSS.
- Definirea datelor demonstrative.
- Calcularea numărului de bilete disponibile.
- Afișarea datelor în format JSON.

### Fișiere principale

- `src/App.jsx` – componenta principală.
- `src/App.css` – stilizarea aplicației.
- `src/main.jsx` – punctul de intrare React.
- `index.html` – documentul HTML principal.

### Verificare

Aplicația a fost pornită cu `npm run dev`.

Comanda `npm run build` a fost executată cu succes în această etapă.

Documentație AI: `../ai-log/etapa-03.md`

---

## Etapa 4 – Componente React și randarea datelor

În Etapa 4, interfața a fost reorganizată în componente React reutilizabile.

### Componente implementate

**App.jsx**

Componenta principală care gestionează datele și transmite lista de bilete către componentele copil.

**TicketList.jsx**

Primește lista de bilete prin props și folosește `map()` pentru a genera componentele TicketCard.

**TicketCard.jsx**

Afișează informațiile unui bilet:
- titlul filmului;
- tipul biletului;
- sala;
- ora;
- locul;
- tipul proiecției;
- starea biletului.

### Concepte utilizate

- Componente React.
- JSX.
- Props.
- map().
- key.
- Randare condiționată.
- Reutilizarea componentelor.

### Fluxul datelor

```text
App.jsx
   |
   v
TicketList.jsx
   |
   v
TicketCard.jsx
```

### Verificare

Au fost verificate afișarea biletelor, funcționarea componentelor și compilarea aplicației.

Documentație AI: `../ai-log/etapa-04.md`

---

## Etapa 5 – State și evenimente

În Etapa 5, aplicația CinemaTicket a devenit interactivă prin utilizarea React Hooks și a funcțiilor de tratare a evenimentelor.

### Funcționalități implementate

- Gestionarea listei de bilete prin `useState`.
- Schimbarea stării unui bilet.
- Ștergerea unui bilet.
- Recalcularea automată a contorului.
- Actualizarea interfeței fără reîncărcarea paginii.
- Comutarea între tema luminoasă și tema întunecată.
- Actualizări imutabile ale state-ului.

### Funcții principale

**handleToggle(id)**

Modifică starea unui bilet folosind `map()`.

**handleDelete(id)**

Elimină biletul selectat folosind `filter()`.

**handleTema()**

Schimbă tema aplicației prin React state și atributul `data-theme`.

### Calcularea biletelor disponibile

```javascript
const active = bilete.filter((bilet) => !bilet.gata).length;
```

Numărul biletelor disponibile este calculat direct din lista curentă, fără un state separat.

### Stage 5 Verification Checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S5-R1 | useState for ticket management | `src/App.jsx` | Inspect state |
| S5-R2 | Ticket toggle functionality | `src/App.jsx` | Toggle ticket |
| S5-R3 | Delete functionality | `src/App.jsx` | Delete ticket |
| S5-R4 | Derived available counter | `src/App.jsx` | Check counter |
| S5-R5 | Immutable state updates | `src/App.jsx` | Inspect map/filter |
| S5-R6 | Light and dark themes | `src/App.jsx`, `src/App.css` | Switch theme |
| S5-R7 | README and AI log | `../ai-log/etapa-05.md` | Read documentation |
| S5-R8 | GitHub publication | Git history | Check commit |

Documentație AI: `../ai-log/etapa-05.md`

---

## Etapa 6 – Date de la un API REST (useEffect)

În Etapa 6, datele aplicației CinemaTicket au fost mutate din codul React într-un fișier JSON, accesibil printr-un API REST local.

API-ul este realizat cu `json-server@0.17.4`.

### Obiective

- Mutarea datelor în `db.json`.
- Configurarea serverului REST.
- Încărcarea biletelor prin cereri HTTP.
- Utilizarea fetch și async/await.
- Utilizarea useEffect.
- Gestionarea stărilor loading, success și error.
- Configurarea adresei API-ului printr-o variabilă de mediu.

### 6.1. Configurarea API-ului

Datele sunt stocate în:

`frontend/db.json`

Fișierul conține cinci bilete demonstrative:

1. Avatar – Standard – Disponibil.
2. Oppenheimer – VIP – Vândut.
3. Dune: Part Two – Student – Disponibil.
4. Interstellar – Standard – Disponibil.
5. Inception – VIP – Vândut.

Ruta API:

`http://localhost:3001/bilete`

Serverul este pornit folosind:

```bash
npm run api
```

### 6.2. Implementarea funcției fetchBilete

În `src/api.js` a fost implementată funcția:

```javascript
export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchBilete() {
    const res = await fetch(`${API_URL}/bilete`);

    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }

    return res.json();
}
```

Funcția utilizează fetch pentru preluarea datelor și verifică răspunsul HTTP prin `res.ok`.

Adresa API-ului poate fi configurată prin variabila de mediu `VITE_API_URL`.

Aceasta este documentată în `.env.example`.

### 6.3. Utilizarea useEffect

În `App.jsx`, datele nu mai sunt definite direct în componentă.

Lista este inițializată folosind:

```javascript
const [bilete, setBilete] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

La montarea componentei, `useEffect` apelează funcția `fetchBilete()` și actualizează lista după primirea răspunsului.

Sunt utilizate:
- `try` pentru încărcarea datelor;
- `catch` pentru gestionarea erorilor;
- `finally` pentru încheierea încărcării;
- `ignore` pentru curățarea efectului.

### 6.4. Gestionarea stărilor

**Loading**

Cât timp aplicația așteaptă răspunsul API-ului, este prevăzut mesajul:

`Se încarcă biletele...`

**Success**

După primirea datelor, aplicația afișează biletele folosind componentele TicketList și TicketCard.

**Error**

Dacă cererea eșuează, aplicația afișează un mesaj care indică problema și recomandă verificarea serverului API.

Mesajele sunt stilizate în `src/App.css`.

### 6.5. Funcționalități păstrate

- Afișarea cardurilor pentru bilete.
- Modificarea stării biletelor.
- Ștergerea biletelor.
- Contorul biletelor disponibile.
- Temele luminoasă și întunecată.
- Designul responsive.

În Etapa 6, modificările prin bifare și ștergere sunt locale, în state-ul React.

La reîncărcarea paginii, datele sunt preluate din nou de la API.

Salvarea modificărilor pe server este prevăzută pentru Etapa 7.

### 6.6. Verificări

Au fost confirmate:

- Pornirea serverului json-server.
- Afișarea datelor JSON la ruta `/bilete`.
- Încărcarea celor cinci bilete în aplicația React.
- Afișarea a trei bilete disponibile.
- Ștergerea unui bilet.
- Actualizarea contorului după ștergere.
- Reapariția biletului după reîncărcarea paginii.

Stările loading și error sunt implementate în cod. Testele separate cu întârziere artificială și cu API-ul oprit nu au fost efectuate.

### 6.7. Stage 6 Verification Checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S6-R1 | API starts and returns JSON | `package.json`, `db.json` | Run `npm run api`, open `/bilete` |
| S6-R2 | Data moved out of React | `src/App.jsx`, `db.json` | Inspect `useState([])` |
| S6-R3 | Loading message implemented | `src/App.jsx` | Start API with `--delay 4000` |
| S6-R4 | Error message implemented | `src/App.jsx` | Stop API and refresh |
| S6-R5 | Centralized fetch and env URL | `src/api.js`, `.env.example` | Inspect API configuration |
| S6-R6 | README and AI log updated | `README.md`, `../ai-log/etapa-06.md` | Read documentation |
| S6-R7 | Stage 6 published on GitHub | Git commit history | Verify after push |

După publicarea Etapei 6 pe GitHub, referințele din coloana Where vor fi completate cu permalink-uri către commit-ul publicat, conform ghidului.

Documentație AI: `../ai-log/etapa-06.md`

---

## Rularea aplicației

Pentru funcționarea Etapei 6 este necesară pornirea a două servere.

### 1. Instalarea dependențelor

Din directorul principal al proiectului:

```bash
cd frontend
npm install
```

### 2. Pornirea API-ului

În primul terminal, din directorul `frontend`:

```bash
npm run api
```

Adresa API-ului:

http://localhost:3001/bilete

### 3. Pornirea aplicației React

Deschide un al doilea terminal în directorul `frontend` și execută:

```bash
npm run dev
```

Adresa aplicației:

http://localhost:5173/

Ambele terminale trebuie să rămână pornite pentru încărcarea datelor de la API.

### 4. Generarea versiunii de producție

```bash
npm run build
```

Comanda generează fișierele pentru producție în directorul `dist`.

### 5. Configurarea adresei API

Fișierul `.env.example` documentează variabila:

```env
VITE_API_URL=http://localhost:3001
```

Pentru o adresă personalizată, se poate crea un fișier `.env` în directorul `frontend`.

Dacă variabila nu este definită, aplicația utilizează automat adresa implicită `http://localhost:3001`.

---

## Utilizarea inteligenței artificiale

ChatGPT a fost utilizat ca instrument de asistență pentru:

- Crearea structurii HTML.
- Stilizarea interfeței CSS.
- Implementarea designului responsive.
- Implementarea logicii JavaScript.
- Înțelegerea și configurarea React și Vite.
- Organizarea componentelor React.
- Utilizarea props, map și key.
- Implementarea useState și a evenimentelor.
- Gestionarea biletelor și schimbarea temei.
- Configurarea json-server.
- Implementarea cererilor API.
- Utilizarea fetch, async/await și useEffect.
- Gestionarea stărilor loading și error.
- Identificarea și rezolvarea erorilor de dezvoltare.
- Redactarea documentației proiectului.

Codul și explicațiile au fost adaptate la tema CinemaTicket.

Jurnalele AI pentru fiecare etapă sunt păstrate în directorul `ai-log`.

---

## Stadiul proiectului

- [x] Etapa 1 – HTML și CSS.
- [x] Etapa 2 – Logica JavaScript.
- [x] Etapa 3 – React și Vite.
- [x] Etapa 4 – Componente React.
- [x] Etapa 5 – State și evenimente.
- [x] Etapa 6 – Date de la un API REST.
- [ ] Etapa 7 – Formular, validare și salvare pe server.

## Concluzie

CinemaTicket a evoluat de la o interfață statică HTML/CSS la o aplicație React interactivă, care preia date printr-un API REST local.

În Etapa 6 au fost introduse noțiuni de comunicare HTTP, încărcare asincronă, useEffect și gestionarea erorilor.

Proiectul este pregătit pentru continuarea dezvoltării în Etapa 7, unde vor fi introduse formularul de adăugare, validarea și persistarea modificărilor pe server.
