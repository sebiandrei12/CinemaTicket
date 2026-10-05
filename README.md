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
3. Pornește pagina folosind extensia Live Server sau deschide direct fișierul în browser.
4. Pagina CinemaTicket va fi afișată în browser.

## AI Usage

ChatGPT a fost utilizat ca instrument de asistență pentru:

- generarea structurii inițiale HTML;
- generarea stilurilor CSS;
- organizarea structurii proiectului;
- realizarea layout-ului folosind CSS Grid și Flexbox;
- implementarea designului responsive;
- implementarea temei întunecate;
- verificarea cerințelor proiectului;
- realizarea documentației.

Codul generat a fost verificat și adaptat pentru tema CinemaTicket.

Detaliile privind utilizarea AI sunt prezentate în folderul `ai-log`, în fișierul `etapa-01.md`.

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

## Project Structure

```text
CinemaTicket/
│
├── ai-log/
│   └── etapa-01.md
│
├── index.html
├── style.css
└── README.md