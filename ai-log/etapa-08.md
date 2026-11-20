

# Etapa 8 – Navigare și stilizare pe componente

## Proiect
CinemaTicket – Tehnologii Web

## Obiectiv
Implementarea navigării cu React Router și
organizarea stilurilor folosind CSS Modules.

## Utilizarea asistentului AI

Asistentul AI a fost utilizat pentru:
- Explicarea cerințelor Etapei 8.
- Configurarea React Router.
- Crearea componentelor Layout și a paginilor.
- Implementarea rutei dinamice `/bilete/:id`.
- Integrarea funcției `fetchBilet(id)`.
- Tratarea erorilor pentru bilete inexistente.
- Migrarea stilurilor la CSS Modules.
- Păstrarea funcționalităților CRUD.
- Pregătirea testelor și documentației.

## Fișiere relevante

- `frontend/src/App.jsx`
- `frontend/src/main.jsx`
- `frontend/src/api.js`
- `frontend/src/index.css`
- `frontend/src/components/Layout.jsx`
- `frontend/src/components/Layout.module.css`
- `frontend/src/components/TicketCard.jsx`
- `frontend/src/components/TicketCard.module.css`
- `frontend/src/components/TicketList.jsx`
- `frontend/src/components/TicketList.module.css`
- `frontend/src/components/BiletForm.jsx`
- `frontend/src/components/BiletForm.module.css`
- `frontend/src/pages/BiletePage.jsx`
- `frontend/src/pages/BiletePage.module.css`
- `frontend/src/pages/BiletDetaliuPage.jsx`
- `frontend/src/pages/BiletDetaliuPage.module.css`
- `frontend/src/pages/DesprePage.jsx`
- `frontend/src/pages/DesprePage.module.css`
- `frontend/src/pages/NotFoundPage.jsx`
- `frontend/src/pages/NotFoundPage.module.css`

## Teste efectuate

- Pagina principală afișează biletele din API.
- Navigarea între Bilete și Despre funcționează.
- Pagina de detalii afișează biletul selectat.
- Ruta `/ceva` afișează pagina 404.
- Ruta `/bilete/999` afișează eroarea API 404.
- Selectorul `[data-testid="nav"] a` returnează 2.
- Selectorul `[data-testid="detail-title"]` returnează Avatar.
- Navigarea prin React Router nu reîncarcă documentul.
- Operațiile GET, POST, PATCH și DELETE funcționează.
- `npm run build` s-a finalizat cu succes.
- `npm run lint` nu a afișat erori.

## Concluzie

Etapa 8 adaugă navigare între pagini și stilizare
modulară, păstrând funcționalitățile implementate
în etapele anterioare.
