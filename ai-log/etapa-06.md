# Etapa 6 – Date de la un API (useEffect)

## 1. Obiectivul etapei

Obiectivul Etapei 6 a fost mutarea datelor aplicației CinemaTicket din codul React într-un fișier `db.json` și încărcarea acestora printr-un API REST local, realizat cu `json-server`.

Aplicația utilizează `fetch`, `async/await` și `useEffect` pentru preluarea datelor și gestionează trei situații: încărcarea, succesul și eroarea.

## 2. Instrumente utilizate

- Visual Studio Code
- React și Vite
- JavaScript și JSX
- json-server 0.17.4
- Fetch API
- useState și useEffect
- Google Chrome
- Git și GitHub
- ChatGPT pentru explicații și asistență la implementare

## 3. Implementarea realizată

### Configurarea API-ului REST

Am instalat `json-server@0.17.4` și am creat fișierul `frontend/db.json`.

În acest fișier am introdus cinci bilete de cinema, cu informații despre film, tipul biletului, sală, oră, loc, proiecție și disponibilitate.

Am configurat comanda `npm run api` în `package.json`.

Serverul API rulează pe portul 3001, iar datele sunt accesibile la adresa:

`http://localhost:3001/bilete`

### Implementarea funcției fetchBilete

Am creat fișierul `frontend/src/api.js`, în care am definit funcția asincronă `fetchBilete()`.

Aceasta realizează o cerere HTTP folosind `fetch`, verifică proprietatea `res.ok` și returnează datele în format JSON.

Adresa serverului este preluată din variabila de mediu `VITE_API_URL`, dacă aceasta este definită, sau din adresa implicită `http://localhost:3001`.

Am creat și fișierul `.env.example` pentru documentarea configurării API-ului.

### Utilizarea useEffect

În `App.jsx` am eliminat lista locală `BILETE_INITIALE` și am inițializat lista folosind `useState([])`.

Am implementat `useEffect` pentru încărcarea automată a datelor de la server la montarea componentei.

Am utilizat:
- `loading` pentru starea de încărcare;
- `error` pentru gestionarea erorilor;
- `try/catch/finally` pentru tratarea cererii;
- variabila `ignore` pentru curățarea efectului și evitarea actualizărilor după demontarea componentei.

### Afișarea datelor

Biletele primite de la API sunt transmise componentei `TicketList` prin `props`.

Componenta `TicketList` utilizează `map()` pentru afișarea componentelor `TicketCard`.

Contorul biletelor disponibile se calculează automat folosind `filter()`.

### Păstrarea funcționalităților anterioare

Am păstrat funcțiile `handleToggle`, `handleDelete` și schimbarea temei luminoase/întunecate.

În această etapă, modificările efectuate asupra biletelor sunt locale, în state-ul React. Salvarea acestora pe server este prevăzută pentru Etapa 7.

## 4. Utilizarea inteligenței artificiale

Pentru realizarea Etapei 6 am utilizat ChatGPT ca instrument de asistență pentru explicarea cerințelor, adaptarea codului și rezolvarea problemelor întâlnite.

### Solicitări adresate AI

1. Cum instalez și configurez json-server versiunea 0.17.4?
2. Cum creez fișierul `db.json` pentru aplicația CinemaTicket?
3. Cum adaug comanda `npm run api` în `package.json`?
4. Cum creez funcția `fetchBilete()` folosind `fetch`, `async` și `await`?
5. Cum utilizez variabila de mediu `VITE_API_URL`?
6. Cum modific componenta `App.jsx` pentru utilizarea `useEffect`?
7. Cum implementez stările `loading` și `error`?
8. Cum păstrez funcționalitățile din Etapa 5?
9. Cum rezolv eroarea ENOENT atunci când comenzile npm sunt executate din directorul greșit?
10. Cum verific dacă datele sunt încărcate de la API?

### Modificări și adaptări

Am adaptat exemplele din ghid la tema CinemaTicket, înlocuind resursa `tasks` cu `bilete` și funcția `fetchTasks` cu `fetchBilete`.

Am păstrat componentele existente `TicketList` și `TicketCard`, structura biletelor și aspectul aplicației.

Codul propus de AI a fost integrat în proiectul existent, fără crearea unei aplicații noi.

## 5. Probleme întâlnite și rezolvarea lor

**Problema 1 – Crearea fișierului db.json**

Inițial, numele `db.json` a fost introdus în terminal ca o comandă PowerShell.

Rezolvare: am creat fișierul folosind opțiunea New File din Explorer, în directorul `frontend`.

**Problema 2 – Eroarea ENOENT**

La executarea comenzilor npm din directorul principal CinemaTicket a apărut o eroare deoarece fișierul `package.json` se află în directorul `frontend`.

Rezolvare: am utilizat comanda `cd frontend` înaintea comenzilor npm.

**Problema 3 – Adaptarea codului React**

Datele biletelor erau inițial definite direct în `App.jsx`.

Rezolvare: am eliminat datele inițiale din componentă și am implementat încărcarea lor prin `useEffect` și `fetchBilete()`.

## 6. Verificări și rezultate

Au fost realizate următoarele verificări:

- [x] Instalarea și configurarea json-server.
- [x] Pornirea serverului API.
- [x] Accesarea rutei `/bilete` în browser.
- [x] Afișarea datelor JSON.
- [x] Încărcarea celor cinci bilete în aplicația React.
- [x] Afișarea corectă a contorului: cinci bilete, dintre care trei disponibile.
- [x] Ștergerea unui bilet și actualizarea contorului.
- [x] Reîncărcarea paginii și reapariția biletului șters.

În plus, au fost implementate mesajul de încărcare, mesajul de eroare și tratarea răspunsurilor HTTP nereușite.

Testarea separată a mesajului de eroare cu API-ul oprit și a mesajului de încărcare cu întârziere artificială nu a fost efectuată.

## 7. Fișiere implicate

- `frontend/db.json`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/.env.example`
- `frontend/src/api.js`
- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `ai-log/etapa-06.md`

Componentele `TicketList.jsx` și `TicketCard.jsx` au fost păstrate din etapa anterioară.

## 8. Concluzie

În Etapa 6, aplicația CinemaTicket a fost extinsă pentru încărcarea datelor printr-un API REST local.

Am utilizat concepte precum `fetch`, `async/await`, `useEffect`, variabile de mediu și gestionarea stărilor de încărcare și eroare.

Aplicația păstrează funcționalitățile implementate anterior, iar datele sunt acum preluate de la server.

În Etapa 7 urmează implementarea formularului de adăugare a biletelor, validarea datelor și salvarea modificărilor prin API.