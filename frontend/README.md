
# CinemaTicket – React Frontend

## Descriere

CinemaTicket este o aplicație web pentru gestionarea biletelor de cinema, dezvoltată în cadrul disciplinei Tehnologii Web de la Universitatea POLITEHNICA București.

Aplicația permite vizualizarea, adăugarea, modificarea stării și ștergerea biletelor, folosind React, Vite și un API REST simulat cu json-server.

În Etapa 8 au fost adăugate navigarea cu React Router, pagina de detalii pentru fiecare bilet, pagina Despre, pagina 404 și stilizarea cu CSS Modules.

Proiectul este dezvoltat progresiv, în etape, fiecare etapă adăugând funcționalități noi.

## Tehnologii utilizate

- React
- JavaScript (ES6+)
- JSX
- CSS3
- CSS Modules
- React Router
- Vite
- Node.js și npm
- json-server 0.17.4
- Fetch API
- React Hooks: useState și useEffect
- Git și GitHub

## Structura proiectului

```text
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── BiletForm.jsx
│   │   ├── BiletForm.module.css
│   │   ├── Layout.jsx
│   │   ├── Layout.module.css
│   │   ├── TicketCard.jsx
│   │   ├── TicketCard.module.css
│   │   ├── TicketList.jsx
│   │   └── TicketList.module.css
│   ├── pages/
│   │   ├── BiletePage.jsx
│   │   ├── BiletePage.module.css
│   │   ├── BiletDetaliuPage.jsx
│   │   ├── BiletDetaliuPage.module.css
│   │   ├── DesprePage.jsx
│   │   ├── DesprePage.module.css
│   │   ├── NotFoundPage.jsx
│   │   └── NotFoundPage.module.css
│   ├── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── cinema.js
│   ├── index.css
│   ├── index.html
│   ├── main.jsx
│   └── style.css
├── .env.example
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

Fișierul `tw.json` se află în rădăcina repository-ului CinemaTicket, în afara folderului `frontend`.

Fișierul `index.css` este utilizat pentru stilurile globale. Fișierele `.module.css` conțin stilurile componentelor și paginilor.

## Modelul de date

Fiecare bilet este reprezentat printr-un obiect JavaScript cu următoarele proprietăți:

| Proprietate | Tip | Descriere |
| --- | --- | --- |
| id | number sau string | Identificator unic generat de server |
| titlu | string | Titlul filmului |
| gata | boolean | false = disponibil, true = vândut |
| tip | string | standard, vip sau student |
| sala | number | Numărul sălii de cinema |
| ora | string | Ora proiecției |
| loc | string | Locul din sală |
| proiectie | string | 2D, 3D sau IMAX |

Datele sunt stocate în `db.json`, în colecția `bilete`.

## Etapa 3 – Inițializarea proiectului React cu Vite

În Etapa 3 a fost realizată migrarea aplicației la React și Vite.

Funcționalități implementate:

- Inițializarea proiectului React.
- Afișarea numelui CinemaTicket.
- Definirea datelor inițiale despre bilete.
- Afișarea numărului total de bilete.
- Calcularea numărului de bilete disponibile.
- Afișarea datelor în format JSON.
- Reutilizarea stilurilor CSS.

Afișarea temporară în format JSON a fost înlocuită în Etapa 4 cu componente React reutilizabile.

## Etapa 4 – Componente și afișarea listelor

În Etapa 4 au fost create componente React reutilizabile.

### TicketList.jsx

Primește lista de bilete prin props și afișează câte un `TicketCard` pentru fiecare bilet.

Folosește metoda `map()` și identificatori unici prin `key={bilet.id}`.

Dacă nu există bilete, afișează mesajul:

`Nu există niciun bilet.`

### TicketCard.jsx

Afișează informațiile unui bilet:

- Titlul filmului
- Tipul biletului
- Sala
- Ora
- Locul
- Tipul proiecției
- Starea biletului

Aspectul cardului se adaptează în funcție de starea disponibil/vândut.

În Etapa 8, titlul filmului a devenit un link către pagina de detalii.

## Etapa 5 – State și evenimente

În această etapă aplicația a devenit interactivă.

Au fost implementate:

- Gestionarea listei de bilete cu `useState`.
- Bifarea unui bilet ca vândut sau disponibil.
- Ștergerea biletelor.
- Recalcularea automată a contoarelor.
- Actualizarea imutabilă a stării cu `map()` și `filter()`.
- Transmiterea funcțiilor prin props.
- Schimbarea temei luminoase/întunecate.

În Etapa 5, modificările erau păstrate numai în state-ul React și se pierdeau la reîncărcarea paginii.

Persistența datelor a fost implementată în Etapa 7.

## Etapa 6 – Date de la un API

În Etapa 6, datele au fost mutate din codul React în `db.json`.

A fost instalat `json-server@0.17.4`, care oferă un API REST local.

Endpoint-ul principal este:

`http://localhost:3001/bilete`

Fișierul `src/api.js` conține funcția `fetchBilete()`, folosită pentru citirea datelor.

Inițial, în `App.jsx`, încărcarea biletelor se realiza cu `useEffect`.

În Etapa 8, această logică a fost mutată în `BiletePage.jsx`.

Aplicația gestionează următoarele stări:

- Loading – datele sunt în curs de încărcare.
- Success – biletele sunt afișate.
- Error – apare un mesaj de eroare dacă API-ul nu poate fi accesat.

URL-ul API-ului poate fi configurat prin `VITE_API_URL`, documentat în `.env.example`.

În Etapa 6, bifarea și ștergerea erau încă operații locale.

## Etapa 7 – Formular, validare și CRUD

În Etapa 7, CinemaTicket a fost extins cu un formular controlat și operații de modificare permanentă a datelor.

Aplicația implementează toate cele patru operații CRUD:

| Operație | Metodă HTTP | Endpoint |
| --- | --- | --- |
| Citire bilete | GET | /bilete |
| Adăugare bilet | POST | /bilete |
| Modificare stare | PATCH | /bilete/:id |
| Ștergere bilet | DELETE | /bilete/:id |

### 7.1. Formularul BiletForm.jsx

A fost creată componenta `src/components/BiletForm.jsx`.

Formularul permite introducerea următoarelor câmpuri:

- Titlul filmului
- Tipul biletului: Standard, VIP, Student
- Sala
- Ora proiecției
- Locul
- Tipul proiecției: 2D, 3D, IMAX

Fiecare câmp este controlat folosind `useState`, `value` și `onChange`.

La trimiterea formularului, `e.preventDefault()` împiedică reîncărcarea automată a paginii.

### 7.2. Validarea datelor

Înainte de trimiterea cererii POST, formularul verifică:

- Titlul filmului este obligatoriu.
- Titlul are maximum 100 de caractere.
- Tipul biletului este valid.
- Sala este un număr întreg între 1 și 20.
- Ora este în formatul HH:MM.
- Locul respectă formatul A12 sau B07.
- Tipul proiecției este valid.

Mesajele de eroare sunt afișate direct în formular, fără folosirea funcției `alert()`.

Câmpul titlului folosește `aria-invalid` pentru semnalarea erorilor.

### 7.3. Prevenirea trimiterilor duble

Formularul folosește starea `trimite`.

Cât timp cererea POST este în desfășurare:

- Butonul este dezactivat.
- Textul butonului devine „Se salvează...”.
- Nu poate fi trimisă încă o cerere prin formular.

După o salvare reușită, câmpurile sunt resetate.

Dacă salvarea eșuează, datele introduse sunt păstrate și apare un mesaj de eroare.

### 7.4. Funcțiile API

Fișierul `src/api.js` conține funcția comună `request()`.

Toate cererile HTTP sunt realizate prin această funcție, care:

- Configurează antetul `Content-Type: application/json`.
- Verifică dacă răspunsul HTTP este valid.
- Aruncă o eroare pentru răspunsurile care nu sunt 2xx.
- Tratează răspunsurile HTTP 204 fără conținut.

Funcțiile implementate în Etapa 7 sunt:

```javascript
fetchBilete()
createBilet(bilet)
updateBilet(id, changes)
deleteBilet(id)
```

În Etapa 8 a fost adăugată și funcția `fetchBilet(id)`.

Componentele React folosesc funcțiile din `api.js`, fără să implementeze cereri HTTP direct în componente.

### 7.5. Persistența datelor

Adăugarea, bifarea și ștergerea sunt realizate prin API.

Principiul implementat este:

**Întâi serverul, apoi actualizarea state-ului React.**

La adăugare, biletul este afișat numai după ce serverul confirmă salvarea și returnează obiectul cu ID.

La modificare, lista este actualizată folosind obiectul returnat de server.

La ștergere, biletul este eliminat din interfață după confirmarea cererii DELETE.

Modificările sunt salvate în `db.json` și rămân după reîncărcarea paginii.

### 7.6. Layout și aspect vizual

Aplicația folosește un layout cu două coloane:

- Stânga: formularul pentru adăugarea biletelor.
- Dreapta: lista biletelor existente.

Pe ecranele înguste, panourile sunt afișate unul sub altul.

Au fost păstrate:

- Tema luminoasă/întunecată.
- Stilurile cardurilor.
- Etichetele Standard, VIP și Student.
- Evidențierea biletelor vândute.
- Butoanele de ștergere.
- Contoarele de bilete.

### 7.7. Verificarea automată

În rădăcina repository-ului a fost creat fișierul `tw.json`.

Configurația folosită identifică:

```json
{
  "resource": "bilete",
  "title": "titlu",
  "done": "gata",
  "sample": {
    "tip": "standard",
    "sala": "4",
    "ora": "19:30",
    "loc": "A12",
    "proiectie": "2D"
  }
}
```

Elementele interfeței au atribute `data-testid`, conform ghidului profesorului:

| Atribut | Element |
| --- | --- |
| form | Formularul de adăugare |
| form-title | Titlul filmului |
| form-tip | Tipul biletului |
| form-sala | Numărul sălii |
| form-ora | Ora proiecției |
| form-loc | Locul |
| form-proiectie | Tipul proiecției |
| form-submit | Butonul de adăugare |
| form-error | Mesajul de eroare al formularului |
| item | Cardul biletului |
| item-title | Titlul biletului în Etapa 7 |
| item-toggle | Checkbox-ul |
| item-delete | Butonul de ștergere |
| empty | Mesajul pentru lista goală |
| loading | Mesajul de încărcare |
| error | Mesajul de eroare API |

În Etapa 8, `item-title` a fost înlocuit cu `item-link`, conform cerințelor noi.

Cardurile au și atributul `data-id`, care conține identificatorul biletului.

### 7.8. Testare efectuată

Au fost efectuate următoarele verificări:

- Pornirea serverului cu `npm run api`.
- Verificarea datelor JSON la `/bilete`.
- Pornirea aplicației React cu `npm run dev`.
- Afișarea formularului și a listei.
- Validarea formatului locului.
- Adăugarea unui bilet nou.
- Păstrarea biletului după refresh.
- Verificarea manuală a funcționalităților de modificare și ștergere.
- Verificarea atributelor `data-testid` în consola browserului.
- Compilarea aplicației cu `npm run build`.

Rezultatul build-ului Etapei 7:

```text
vite v8.3.4 building client environment for production...
20 modules transformed.
built in 258ms
```

Testele separate cu API-ul oprit și cu întârziere artificială nu au fost efectuate în sesiunea Etapei 7.

---

## Etapa 8 – Navigare și stilizare pe componente

### 8.1. Obiectiv

Etapa 8 introduce navigarea între pagini folosind React Router și separarea stilurilor folosind CSS Modules.

Funcționalitățile implementate în etapele anterioare sunt păstrate.

### 8.2. Instalarea React Router

Biblioteca a fost instalată folosind:

```bash
npm install react-router-dom
```

În `src/main.jsx`, componenta `App` este inclusă în `BrowserRouter`.

```jsx
<BrowserRouter>
    <App />
</BrowserRouter>
```

### 8.3. Configurarea rutelor

Rutele sunt definite în `src/App.jsx`.

| Rută | Componentă | Descriere |
| --- | --- | --- |
| `/` | BiletePage | Formular și lista biletelor |
| `/bilete/:id` | BiletDetaliuPage | Detaliile unui bilet |
| `/despre` | DesprePage | Prezentarea aplicației |
| `*` | NotFoundPage | Pagina 404 |

Navigarea folosește React Router și nu necesită reîncărcarea documentului HTML.

### 8.4. Componenta Layout

Fișier:

`src/components/Layout.jsx`

Componenta conține:

- Antetul CinemaTicket.
- Meniul principal de navigare.
- Butonul pentru tema luminoasă/întunecată.
- Componenta `Outlet`.
- Subsolul aplicației.

Meniul folosește `NavLink`, care evidențiază automat pagina activă.

Ruta principală folosește proprietatea `end`.

Meniul are atributul:

`data-testid="nav"`

### 8.5. Pagina principală

Fișier:

`src/pages/BiletePage.jsx`

Logica de gestionare a biletelor a fost mutată din `App.jsx` în această pagină.

Pagina implementează:

- GET pentru încărcarea biletelor.
- POST pentru adăugare.
- PATCH pentru schimbarea stării.
- DELETE pentru ștergere.
- Contorul biletelor disponibile.
- Mesaje loading și error.

Datele sunt salvate în API înainte de actualizarea interfeței.

### 8.6. Pagina de detalii

Fișier:

`src/pages/BiletDetaliuPage.jsx`

Ruta dinamică:

`/bilete/:id`

Componenta folosește `useParams()` pentru citirea identificatorului din URL.

În `src/api.js` a fost introdusă funcția:

```javascript
fetchBilet(id)
```

Aceasta realizează o cerere GET către:

`/bilete/:id`

Pagina afișează:

- Titlul filmului.
- Tipul biletului.
- Sala.
- Ora proiecției.
- Locul.
- Tipul proiecției.
- Starea disponibil/vândut.
- ID-ul biletului.

Pagina conține și un link „Înapoi la bilete”.

Atribute de testare:

- `data-testid="detail"`
- `data-testid="detail-title"`
- `data-testid="loading"`
- `data-testid="error"`

Dacă biletul nu există, este afișat un mesaj de eroare.

### 8.7. Linkuri către detalii

În `src/components/TicketCard.jsx`, titlul filmului folosește componenta `Link`.

```jsx
<Link
    to={`/bilete/${bilet.id}`}
    data-testid="item-link"
>
    {bilet.titlu}
</Link>
```

Atributul `item-title` din Etapa 7 a fost înlocuit cu `item-link`.

Checkbox-ul și butonul de ștergere rămân funcționale.

### 8.8. Pagina Despre

Fișier:

`src/pages/DesprePage.jsx`

Ruta:

`/despre`

Pagina prezintă:

- Descrierea CinemaTicket.
- Tehnologiile utilizate.
- Funcționalitățile aplicației.

### 8.9. Pagina 404

Fișier:

`src/pages/NotFoundPage.jsx`

Ruta:

`*`

Pentru adrese inexistente, precum `/ceva`, aplicația afișează:

- Numărul 404.
- Mesajul „Pagina nu a fost găsită”.
- Linkul „Înapoi la bilete”.

Pagina conține:

`data-testid="not-found"`

### 8.10. CSS Modules

Stilurile globale sunt definite în:

`src/index.css`

Stilurile specifice componentelor sunt definite în:

```text
src/components/
├── Layout.module.css
├── BiletForm.module.css
├── TicketCard.module.css
└── TicketList.module.css

src/pages/
├── BiletePage.module.css
├── BiletDetaliuPage.module.css
├── DesprePage.module.css
└── NotFoundPage.module.css
```

Componentele importă stilurile folosind:

```jsx
import styles from "./Component.module.css";
```

Exemplu de utilizare:

```jsx
<div className={styles.container}>
    ...
</div>
```

Avantaje:

- Izolarea claselor CSS.
- Evitarea conflictelor de stiluri.
- Organizarea codului pe componente.
- Întreținerea mai ușoară a interfeței.

Au fost păstrate tema luminoasă/întunecată și designul responsive.

### 8.11. Verificări funcționale

Au fost verificate următoarele:

| Test | Rezultat |
| --- | --- |
| Afișarea paginii principale | OK |
| Încărcarea biletelor din API | OK |
| Pagina Despre | OK |
| Pagina de detalii Avatar | OK |
| Ruta inexistentă `/ceva` | OK |
| Bilet inexistent `/bilete/999` | OK |
| Navigarea fără reîncărcarea documentului | OK |
| GET, POST, PATCH, DELETE | OK |
| Tema întunecată și CSS Modules | OK |

Verificări efectuate în consola browserului:

```javascript
document.querySelectorAll('[data-testid="nav"] a').length
```

Rezultat:

```text
2
```

Verificarea titlului:

```javascript
document.querySelector('[data-testid="detail-title"]').textContent
```

Rezultat:

```text
'Avatar'
```

### 8.12. Build și ESLint

Au fost executate comenzile:

```bash
npm run build
npm run lint
```

Rezultatul build-ului:

```text
vite v8.3.4 building client environment for production...
41 modules transformed.
built in 272ms
```

ESLint nu a raportat erori în rezultatul terminalului.

### 8.13. Documentație AI

Asistența AI utilizată pentru Etapa 8 este documentată în:

`../ai-log/etapa-08.md`

Documentația include implementarea rutelor, componentele noi, CSS Modules și testele efectuate.

---

## Instalare și rulare locală

### 1. Instalarea dependențelor

Din folderul `frontend`:

```bash
npm install
```

Pentru o instalare curată folosind versiunile din `package-lock.json`:

```bash
npm ci
```

### 2. Pornirea serverului API

În primul terminal:

```bash
npm run api
```

API-ul va fi disponibil la:

`http://localhost:3001/bilete`

### 3. Pornirea aplicației React

În al doilea terminal:

```bash
npm run dev
```

Aplicația va fi disponibilă, în mod normal, la:

`http://localhost:5173/`

Ambele servere trebuie să fie pornite.

### 4. Verificarea build-ului

```bash
npm run build
```

Comanda generează versiunea de producție în folderul `dist/`.

### 5. Verificarea ESLint

```bash
npm run lint
```

Comanda verifică problemele de cod conform configurației ESLint.

## Documentația AI

Pentru fiecare etapă există documentație în folderul `ai-log` din rădăcina repository-ului.

Pentru Etapa 7:

`../ai-log/etapa-07.md`

Pentru Etapa 8:

`../ai-log/etapa-08.md`

## Status proiect

- [x] Etapa 3 – React și Vite.
- [x] Etapa 4 – Componente și props.
- [x] Etapa 5 – State și evenimente.
- [x] Etapa 6 – Date încărcate din API.
- [x] Etapa 7 – Formular controlat, validare și CRUD cu persistență.
- [x] Etapa 8 – Rutare, pagină de detaliu și CSS Modules.

## Repository GitHub

https://github.com/sebiandrei12/CinemaTicket
