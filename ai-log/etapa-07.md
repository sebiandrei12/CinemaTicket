

# AI Log – Etapa 7: Formular și validare

## Proiect
CinemaTicket – Tehnologii Web

## Obiectivul etapei

Implementarea unui formular controlat React pentru adăugarea biletelor de cinema, validarea datelor și salvarea permanentă a operațiilor CRUD prin API-ul json-server.

## Instrument AI utilizat

ChatGPT (OpenAI).

## Activități realizate cu asistență AI

### 1. Extinderea API-ului

Fișier: `frontend/src/api.js`

A fost creată funcția comună `request()` pentru cererile HTTP.

Au fost implementate:
- `fetchBilete()` – GET
- `createBilet()` – POST
- `updateBilet()` – PATCH
- `deleteBilet()` – DELETE

Cererile folosesc API-ul configurat prin `VITE_API_URL`, cu adresa implicită `http://localhost:3001`.

### 2. Formularul controlat

Fișier: `frontend/src/components/BiletForm.jsx`

A fost creat formularul pentru introducerea:
- Titlului filmului
- Tipului biletului
- Sălii
- Orei proiecției
- Locului
- Tipului proiecției

Fiecare câmp este controlat cu `useState`, `value` și `onChange`.

### 3. Validarea datelor

Au fost implementate următoarele reguli:
- Titlul este obligatoriu și are maximum 100 de caractere.
- Tipul biletului trebuie să fie standard, VIP sau student.
- Sala trebuie să fie un număr întreg între 1 și 20.
- Ora trebuie să aibă un format valid.
- Locul trebuie să respecte formatul A12 sau B07.
- Proiecția trebuie să fie 2D, 3D sau IMAX.

Erorile sunt afișate lângă formular, fără `alert()`.

### 4. Prevenirea trimiterii duble

În timpul salvării, butonul este dezactivat și afișează mesajul „Se salvează...”.

Formularul se golește numai după confirmarea salvării de către server.

Dacă salvarea eșuează, datele introduse rămân în formular.

### 5. Integrarea în React

Fișier: `frontend/src/App.jsx`

Au fost implementate funcțiile:
- `handleAdd()` pentru adăugare
- `handleToggle()` pentru modificarea stării
- `handleDelete()` pentru ștergere

Lista este actualizată după confirmarea serverului.

Au fost păstrate contorul de bilete și comutarea între tema luminoasă și cea întunecată.

### 6. Actualizarea interfeței

Fișier: `frontend/src/App.css`

A fost realizat un layout responsive cu formularul în stânga și lista biletelor în dreapta.

Au fost adăugate stiluri pentru:
- Câmpurile formularului
- Erorile de validare
- Butonul dezactivat
- Tema luminoasă și întunecată

### 7. Pregătirea verificării automate

Fișiere:
- `tw.json`
- `BiletForm.jsx`
- `TicketCard.jsx`
- `TicketList.jsx`
- `App.jsx`

Au fost introduse atributele `data-testid` pentru elementele utilizate în verificarea automată.

Fișierul `tw.json` definește resursa `bilete`, câmpul `titlu`, starea `gata` și valorile de test pentru formular.

## Testare efectuată

- API-ul a pornit cu `npm run api`.
- Endpoint-ul `/bilete` a returnat datele JSON.
- Aplicația React a pornit cu `npm run dev`.
- Formularul și lista biletelor s-au afișat corect.
- Validarea locului a afișat un mesaj de eroare.
- A fost adăugat biletul Titanic.
- Biletul nou a rămas salvat după reîncărcarea paginii.
- Funcționalitățile de modificare și ștergere au fost confirmate prin testare manuală.
- Atributele `data-testid` au fost inspectate în consola browserului.
- Comanda `npm run build` a fost executată cu succes.

Rezultatul build-ului:

`vite v8.3.4 – 20 modules transformed – built in 258ms`

## Verificări suplimentare

Testele separate pentru salvarea cu API-ul oprit și pentru butonul dezactivat folosind întârzierea artificială nu au fost încă efectuate.

## Concluzie

Etapa 7 implementează formularul controlat și operațiile CRUD cu persistarea modificărilor prin json-server.

Codul a fost adaptat la tema CinemaTicket și păstrează funcționalitățile etapelor anterioare.

Documentația și checklist-ul vor fi publicate pe GitHub în commit-uri separate, conform cerințelor proiectului.
