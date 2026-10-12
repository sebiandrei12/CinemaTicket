# Etapa 3 — Vite și React

## Instrumente folosite

- React pentru construirea interfeței aplicației.
- Vite pentru pornirea serverului de dezvoltare și construirea versiunii de producție.
- JavaScript și JSX pentru date și afișarea lor.
- CSS pentru stilizarea interfeței.
- VS Code pentru editarea fișierelor și terminalul pentru comenzile npm.

## Conversație cu AI

Link conversație: https://chatgpt.com/share/6accaccf-e844-83ed-b797-35778cacca64

Am folosit AI pentru a clarifica rolul instrumentelor și fișierelor din proiect, logica de calcul a contorului și pașii de verificare a aplicației. Întrebările discutate au fost:

1. Ce este Vite și de ce îl folosim în proiect?
2. De ce fișierele vechi sunt păstrate în `mockup/`, iar proiectul React este în `frontend/`?
3. Ce rol au `App.jsx`, `App.css`, `main.jsx` și `index.html`?
4. Cum funcționează componenta `App` și ce înseamnă `export default`?
5. Cum sunt organizate datele despre bilete și cum este calculat numărul de bilete disponibile cu `filter()`?
6. Cum sunt folosite expresiile JavaScript între acolade în JSX pentru afișarea contorului?
7. De ce lista de bilete este afișată momentan ca JSON, nu ca niște carduri?
8. Ce verifică comenzile `npm run dev` și `npm run build`?
9. Cum au fost identificate și rezolvate erorile care au provocat pagina albă?
10. Care sunt pașii logici pentru dezvoltarea ulterioară a aplicației CinemaTicket?

## Modificări realizate

- Am creat proiectul React cu Vite în folderul `frontend/`.
- Am păstrat fișierele versiunii anterioare în folderul `mockup/`.
- Am configurat `frontend/index.html` pentru a încărca aplicația React.
- Am configurat `frontend/src/main.jsx` pentru a monta componenta `App` și a importa stilurile.
- Am implementat în `frontend/src/App.jsx` date de exemplu pentru trei bilete.
- Am calculat numărul de bilete disponibile folosind `filter()` și am afișat numărul total și numărul disponibil în antet.
- Am reutilizat stilurile CSS în `frontend/src/App.css`.
- Am afișat lista de bilete în format JSON, conform cerinței acestei etape.

## Probleme întâlnite și rezolvare

În timpul configurării, pagina a fost albă din cauza unor erori în `main.jsx` și `App.jsx`. Am verificat codul și erorile afișate, apoi am corectat fișierele astfel încât `main.jsx` să importe corect componenta `App`, iar `App.jsx` să exporte componenta implicită. Am avut grijă să nu includ în fișiere marcajele de cod Markdown, precum liniile cu trei caractere backtick.

## Verificare

- Am pornit aplicația cu `npm run dev` și am verificat-o în browser.
- Am rulat `npm run build`, iar procesul s-a încheiat cu succes.
- Aplicația afișează numele CinemaTicket, descrierea, numărul total de bilete, numărul de bilete disponibile și datele în format JSON.

## Ce am învățat

Am înțeles mai bine structura de bază a unui proiect React cu Vite, rolul componentelor JSX și al fișierelor de intrare, modul de afișare a datelor calculate și diferența dintre serverul de dezvoltare și comanda de build. Am învățat și să urmăresc erorile din cod pentru a identifica problemele care pot duce la o pagină albă.

## Pași următori

Următorul pas este publicarea codului și a documentației actualizate pe GitHub. În etapa următoare, lista afișată ca JSON poate fi înlocuită cu componente care afișează fiecare bilet într-un card.
