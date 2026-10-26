# CinemaTicket

CinemaTicket este o aplicație web pentru gestionarea vânzărilor de bilete pentru un cinematograf.

Aplicația gestionează informații despre filme, proiecții, clienți și bilete.

## Data Model

Modelul aplicației este bazat pe următoarele entități:

| Entitate | Atribute |
|---|---|
| Film | id_film, titlu, durata, gen, rating |
| Sala | id_sala, numar_sala, capacitate, tip |
| Proiectie | id_proiectie, data, ora, id_film, id_sala |
| Client | id_client, nume, email, telefon |
| Bilet | id_bilet, loc, pret, id_client, id_proiectie |
| Angajat | id_angajat, nume, functie, salariu, telefon |

## Sample Data

Cele trei elemente de test utilizate în proiect sunt:

| Film | Stare | Tip bilet | Sala | Ora | Loc | Tip proiecție |
|---|---|---|---|---|---|---|
| Avatar | Disponibil | Standard | Sala 4 | 19:30 | A12 | 2D |
| Oppenheimer | Vândut | VIP | Sala 2 | 21:00 | B07 | IMAX |
| Dune: Part Two | Disponibil | Student | Sala 1 | 18:00 | C15 | 3D |

Oppenheimer este elementul marcat ca finalizat/vândut.

## Categories

Tipurile de bilete utilizate în aplicație sunt:

- Standard
- VIP
- Student

Tipurile de proiecție sunt:

- 2D
- 3D
- IMAX

## User

Elementele aplicației sunt asociate unui client.

În etapele următoare, informațiile despre client vor fi gestionate pe baza entității `CLIENT`.

## How to Run

1. Deschide folderul proiectului în Visual Studio Code.
2. Deschide fișierul `index.html`.
3. Pornește pagina folosind extensia Live Server.
4. Accesează pagina CinemaTicket în browser.
5. Pentru verificarea logicii JavaScript, deschide consola browserului folosind `F12` sau `Ctrl + Shift + J`.

## AI Usage

ChatGPT a fost utilizat ca instrument de asistență pentru:

- generarea structurii inițiale HTML;
- generarea stilurilor CSS;
- organizarea structurii proiectului;
- realizarea layout-ului folosind CSS Grid și Flexbox;
- implementarea designului responsive;
- implementarea temei întunecate;
- verificarea cerințelor proiectului;
- implementarea logicii JavaScript;
- realizarea funcțiilor de listare, numărare, căutare, adăugare, modificare și ștergere;
- realizarea documentației proiectului.

Codul generat a fost verificat și adaptat pentru tema CinemaTicket.

Detaliile privind utilizarea AI sunt prezentate în folderul `ai-log`, în fișierele:

- `etapa-01.md`
- `etapa-02.md`

## Interface Features

Interfața conține:

- antetul aplicației;
- descrierea aplicației;
- contorul elementelor;
- formular pentru adăugarea unui bilet;
- câmp text pentru film;
- listă fixă pentru tipul biletului;
- trei carduri cu date de test;
- stare pentru fiecare bilet;
- marcarea vizibilă a unui element finalizat;
- etichete pentru tipul biletului;
- layout responsive;
- CSS Grid;
- Flexbox;
- efecte hover;
- focus vizibil la navigarea cu tastatura;
- temă întunecată.

## Responsive Design

Pe ecrane cu lățimea mai mare de 700px, formularul și lista sunt afișate în două coloane.

Pe ecrane cu lățimea de maximum 700px, interfața trece la o singură coloană.

## Stage 2: data logic

Plain JavaScript, no DOM.

Fișierul `cinema.js` conține array-ul cu datele aplicației și funcțiile care citesc și modifică aceste date.

Rezultatele funcțiilor sunt afișate în consola browserului.

Logica JavaScript include:

- listarea titlurilor filmelor;
- numărarea biletelor disponibile;
- căutarea după titlu;
- căutarea după ID;
- adăugarea unui bilet cu validare;
- generarea unui ID unic;
- schimbarea stării unui bilet;
- ștergerea unui bilet.

Funcțiile folosesc metodele `map`, `filter`, `find` și `reduce`.

Operațiile sunt realizate în mod imutabil. Funcțiile nu modifică array-ul primit, ci returnează array-uri noi.

Adăugarea verifică:

- dacă titlul filmului nu este gol;
- dacă tipul biletului este unul dintre valorile permise.

Testele JavaScript sunt grupate în consola browserului în secțiunile:

- Citire;
- Adăugare;
- Modificare și ștergere;
- Validare.

## Stage 2 Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JavaScript file is linked and logs are displayed on page load | [index.html](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/index.html) | Open the page and press F12 to check the Console |
| S2-R2 | Array contains at least 3 items with id, title, state and tag | [cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Open the `bilete` array and inspect the three initial objects |
| S2-R3 | Functions for listing, counting, searching, adding, toggling and deleting | [cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Inspect the implemented functions and run the console tests |
| S2-R4 | Adding rejects an empty title and an invalid ticket type | [cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Check the validation section and the error messages in the Console |
| S2-R5 | Original array remains unchanged after adding an item | [cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Run the add test and check that the original array still contains 3 items |
| S2-R6 | README Stage 2 section and AI log are included | [README.md](https://github.com/sebiandrei12/CinemaTicket/blob/main/README.md) / [etapa-02.md](https://github.com/sebiandrei12/CinemaTicket/blob/43fab0e/ai-log/etapa-02.md) | Read the Stage 2 documentation and AI log |
| S2-R7 | Stage 2 commit was pushed to GitHub | [Commit history](https://github.com/sebiandrei12/CinemaTicket/commits/main/) | Check the Git history for the Stage 2 commit |

## Project Structure

```text
CinemaTicket/
│
├── ai-log/
│   ├── etapa-01.md
│   └── etapa-02.md
│
├── cinema.js
├── index.html
├── style.css
└── README.md

## Stage 3: Vite and React project

The application now uses React and Vite in the `frontend/` directory. The previous HTML, CSS and JavaScript files are preserved in `mockup/`.

The main React component displays the CinemaTicket application name, the total number of tickets, the number of available tickets and the ticket data in JSON format.

### How to run

Open a terminal in the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

To verify the production build, run:

```bash
npm run build
```

### Stage 3 Verification Checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S3-R1 | Vite development server starts without errors | `frontend/package.json` | Run `npm install` and `npm run dev` |
| S3-R2 | Application name and ticket counter are displayed | `frontend/src/App.jsx` | Open the application and inspect the header |
| S3-R3 | Ticket data is displayed in JSON format | `frontend/src/App.jsx` | Inspect the ticket list in the browser |
| S3-R4 | Previous CSS styles are reused | `frontend/src/App.css` | Open the application and inspect its appearance |
| S3-R5 | Production build completes successfully | `frontend/` | Run `npm run build` |
| S3-R6 | README and AI log are updated | `README.md`, `ai-log/etapa-03.md` | Review both files |
| S3-R7 | Stage 3 changes are committed and pushed | GitHub commit history | Check the published commit |

### AI Usage — Stage 3

AI was used to understand Vite and React, clarify the role of the project files, calculate the ticket counter, troubleshoot errors and verify the application build. Details are documented in `ai-log/etapa-03.md`.

## Etapa 4 — Componente React și randarea datelor

În această etapă, aplicația CinemaTicket a fost organizată în componente React reutilizabile.

### Implementare

- `TicketCard.jsx` — afișează informațiile unui singur bilet.
- `TicketList.jsx` — parcurge lista de bilete și generează cardurile folosind `map()`.
- `App.jsx` — definește datele și transmite lista către `TicketList` prin `props`.
- `App.css` — definește stilurile pentru carduri, etichete și starea biletelor.

### Funcționalități

- Afișarea dinamică a biletelor.
- Transmiterea datelor prin `props`.
- Utilizarea proprietății `key` pentru identificarea elementelor din listă.
- Afișarea unui mesaj atunci când lista este goală.
- Evidențierea vizuală a biletelor vândute și disponibile.

### Verificare

Comanda `npm run build`, executată din directorul `frontend`, a fost finalizată cu succes.

### Documentarea utilizării AI

Conversația AI asociată acestei etape: [Componente React, props și randarea listelor](https://chatgpt.com/share/6ad5e16a-05b8-83eb-abf4-98dadacd8be8)

Detaliile implementării și întrebările analizate sunt consemnate în `ai-log/etapa-04.md`.


## Stage 5: local state and events

In this stage, the CinemaTicket application was made interactive using React local state (`useState`) and event handlers.

### Implementation

- `App.jsx` — manages the ticket list and theme state.
- `TicketList.jsx` — renders the ticket cards and passes event handlers through props.
- `TicketCard.jsx` — provides the checkbox for changing a ticket's status and the delete button.
- `App.css` — defines the ticket styles, status appearance, theme variables and responsive layout.

### Features

- Marking a ticket as sold or available.
- Deleting a selected ticket.
- Automatically updating the number of available tickets.
- Switching between light and dark themes.
- Updating the interface when React state changes.
- Using immutable state updates.

### How to verify

From the `frontend/` directory, run:

```bash
npm run build
```

The production build completed successfully.

Manual checks confirmed that marking a ticket as sold updates the counter, switching themes changes the interface, and deleting a ticket removes it from the list.

### AI Usage — Stage 5

AI was used to understand and implement React state, event handlers, props, immutable updates, ticket counting and theme switching. The AI-assisted implementation and verification process is documented in `ai-log/etapa-05.md`.

[Stage 5 AI conversation](https://chatgpt.com/share/6adf2cde-50a4-83eb-afec-ca32540fb8dd)

### Stage 5 Verification Checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S5-R1 | Ticket list is managed using `useState` | `frontend/src/App.jsx` | Inspect the state declaration |
| S5-R2 | Toggling a ticket updates its state and appearance | `frontend/src/App.jsx`, `frontend/src/components/TicketCard.jsx` | Toggle a ticket in the browser |
| S5-R3 | Deleting a ticket removes it from the list | `frontend/src/App.jsx`, `frontend/src/components/TicketCard.jsx` | Delete a ticket and verify its removal |
| S5-R4 | Available ticket count is derived from the current list | `frontend/src/App.jsx` | Inspect the filtering logic and toggle a ticket |
| S5-R5 | State updates are immutable | `frontend/src/App.jsx` | Inspect the update functions; verify that `push()` and `splice()` are not used to mutate state |
| S5-R6 | Light and dark themes can be selected | `frontend/src/App.jsx`, `frontend/src/App.css` | Switch between both themes |
| S5-R7 | README and AI log are updated | `README.md`, `ai-log/etapa-05.md` | Review both files |
| S5-R8 | Stage 5 changes are committed and pushed | GitHub commit history | Check the published commit |

**Note:** The browser console and the system-preferred theme behavior should also be checked before marking those checks as verified.