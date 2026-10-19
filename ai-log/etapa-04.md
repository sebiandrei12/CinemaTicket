

# Etapa 4 — Componente React și randarea datelor

## 1. Obiectiv

Obiectivul acestei etape a fost organizarea interfeței aplicației CinemaTicket în componente React reutilizabile și afișarea dinamică a biletelor pe baza datelor definite în `App.jsx`.

## 2. Componente implementate

### TicketCard.jsx

Componenta `TicketCard.jsx` afișează informațiile unui singur bilet. Primește obiectul bilet prin intermediul proprietății `bilet` și afișează titlul filmului, tipul biletului, sala, ora, locul, tipul proiecției și starea biletului.

### TicketList.jsx

Componenta `TicketList.jsx` primește lista de bilete prin proprietatea `bilete`. Utilizează metoda `map()` pentru a genera câte o componentă `TicketCard` pentru fiecare bilet și folosește `key={bilet.id}` pentru identificarea elementelor din listă.

Dacă lista este goală, componenta afișează mesajul „Nu există niciun bilet.”.

### App.jsx

Componenta principală definește datele demonstrative și transmite lista către `TicketList` prin `props`.

Fluxul datelor este:

`App.jsx` → `TicketList.jsx` → `TicketCard.jsx`

## 3. Concepte React utilizate

- **Componente separate:** organizează codul și permit reutilizarea elementelor interfeței.
- **Props:** transmit datele de la componenta părinte către componentele copil.
- **map():** parcurge lista și generează cardurile corespunzătoare.
- **key:** oferă fiecărui element din listă un identificator unic și stabil.
- **Randare condiționată:** afișează un mesaj explicit atunci când lista este goală.

## 4. Conversația cu AI

Link către conversația utilizată pentru documentarea etapei:

https://chatgpt.com/share/6ad5e16a-05b8-83eb-abf4-98dadacd8be8

În conversație au fost analizate următoarele întrebări:

1. De ce folosim componente React separate?
2. Cum sunt utilizate props în `TicketCard.jsx` și `TicketList.jsx`?
3. De ce utilizăm `map()` și `key`?
4. Cum gestionăm lista goală?
5. Cum verificăm funcționarea aplicației?

Răspunsurile au fost utilizate pentru înțelegerea structurii componentelor și a modului în care datele sunt transmise și afișate în aplicație.

## 5. Verificare

Aplicația a fost pornită cu `npm run dev` din directorul `frontend`.

Au fost verificate:
- afișarea celor trei bilete demonstrative;
- afișarea cardurilor și a informațiilor aferente;
- afișarea diferită a biletelor în funcție de starea lor;
- compilarea proiectului prin comanda `npm run build`.

**Rezultat:** comanda `npm run build` a fost executată cu succes.

## 6. Fișiere implicate

- `frontend/src/App.jsx`
- `frontend/src/components/TicketCard.jsx`
- `frontend/src/components/TicketList.jsx`
- `frontend/src/App.css`
- `ai-log/etapa-04.md`

## 7. Concluzie

În această etapă, aplicația CinemaTicket a fost reorganizată folosind componente React separate, transmiterea datelor prin `props`, randarea listelor cu `map()` și identificarea elementelor prin `key`. A fost implementată și gestionarea cazului în care lista de bilete este goală. Compilarea proiectului a fost verificată cu succes.