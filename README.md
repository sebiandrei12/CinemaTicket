
# CinemaTicket

CinemaTicket is a web application for managing cinema tickets. It allows users to view movie tickets, check their availability, mark tickets as sold or available, and remove tickets from the interface.

The project is developed in stages for the Web Technologies course, starting with a static HTML/CSS mockup, continuing with JavaScript data logic, and then migrating to React with Vite. In Stage 6, ticket data is loaded from a REST API provided by `json-server`.

## Data model

The current ticket objects use the following fields:

| Field | Type | Notes |
| --- | --- | --- |
| `id` | number | Unique ticket identifier |
| `titlu` | text | Movie title |
| `gata` | boolean | `false` = available, `true` = sold |
| `tip` | fixed values | `standard`, `vip`, `student` |
| `sala` | number | Cinema hall number |
| `ora` | text | Screening time, e.g. `19:30` |
| `loc` | text | Seat, e.g. `A12` |
| `proiectie` | fixed values | `2D`, `3D`, `IMAX` |

The broader CinemaTicket concept also includes films, cinema halls, screenings, customers, employees and tickets. These are conceptual entities; the current React implementation manages a list of ticket objects, not a relational database.

### Sample data used across the stages

The original three tickets were:

1. Avatar — available, Standard, Hall 4, 19:30, A12, 2D.
2. Oppenheimer — sold, VIP, Hall 2, 21:00, B07, IMAX.
3. Dune: Part Two — available, Student, Hall 1, 18:00, C15, 3D.

The initial dataset had **3 tickets, of which 2 were available**.

In Stage 6, two more tickets were added:

4. Interstellar — available, Standard, Hall 3, 20:00, D08, IMAX.
5. Inception — sold, VIP, Hall 5, 22:00, E10, 2D.

The Stage 6 API therefore provides **5 tickets, of which 3 are available**.

## Project structure

- `mockup/` — HTML, CSS and JavaScript files preserved from Stages 1 and 2.
- `frontend/` — React application created using Vite in Stage 3.
- `frontend/src/components/` — Reusable `TicketList` and `TicketCard` React components.
- `frontend/db.json` — Ticket data served by `json-server` in Stage 6.
- `frontend/src/api.js` — HTTP requests and API URL configuration.
- `frontend/.env.example` — Example API environment variable.
- `ai-log/` — Documentation of AI assistance for each stage.
- `frontend/README.md` — Technical documentation for the current React frontend.
- `README.md` — Overall project documentation and verification checklists.

## Stage 1: Static mockup

Stage 1 introduced a static interface for the CinemaTicket application using semantic HTML and CSS.

The original interface displayed the application header, a demonstration form, a ticket counter and three sample ticket cards. The sold ticket had a different visual appearance from available tickets.

The styling used CSS Grid and Flexbox, hover effects, visible keyboard focus, CSS variables, responsive design and a dark theme.

The initial two-column layout switched to one column on screens up to 700px wide.

The original implementation is preserved in `mockup/`. The interface was opened and checked using Live Server.

AI documentation: [`ai-log/etapa-01.md`](ai-log/etapa-01.md).

## Stage 2: Data logic

Stage 2 added plain JavaScript logic without DOM manipulation.

The file `mockup/cinema.js` contains the ticket data and functions for reading and modifying the list.

The JavaScript logic includes:

- Listing movie titles.
- Counting available tickets.
- Searching tickets by title or ID.
- Adding a ticket with title and type validation.
- Generating unique identifiers.
- Changing the sold/available state of a ticket.
- Deleting tickets.
- Performing immutable updates.

The implementation uses `map()`, `filter()`, `find()` and `reduce()`.

Functions return new arrays instead of mutating the original array.

The JavaScript functions were verified through tests in the browser console, including reading, adding, updating, deleting, validation and immutability checks.

### Stage 2: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JavaScript linked, console output on page load | [Historical index.html](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/index.html) | Open the Stage 2 HTML page and press F12 |
| S2-R2 | At least 3 items with ID, title, state and type | [Historical cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Inspect the initial ticket array |
| S2-R3 | List, count, search, add, toggle and delete functions | [Historical cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Inspect the functions and console output |
| S2-R4 | Adding rejects an empty title and invalid type | [Historical cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Inspect validation and run invalid-input tests |
| S2-R5 | Original array remains unchanged after adding | [Historical cinema.js](https://github.com/sebiandrei12/CinemaTicket/blob/bfb2af8/cinema.js) | Compare original and returned arrays |
| S2-R6 | README Stage 2 section and AI log | [Stage 2 AI log](https://github.com/sebiandrei12/CinemaTicket/blob/43fab0e/ai-log/etapa-02.md) | Read project documentation and AI log |
| S2-R7 | Stage 2 commit pushed to GitHub | [Repository commit history](https://github.com/sebiandrei12/CinemaTicket/commits/main/) | Locate the Stage 2 commit |

## Stage 3: Vite and React project

CinemaTicket was migrated to React using Vite.

The React application is located in `frontend/`, while the earlier static version remains in `mockup/`.

In Stage 3, `frontend/src/App.jsx` defined the three example tickets and displayed:

- The CinemaTicket application name and description.
- The total number of tickets.
- The number of available tickets, calculated from the array.
- The ticket data in JSON format as a temporary development view.

`frontend/src/main.jsx` mounted the React application, and the original styling was reused in `frontend/src/App.css`.

`npm run dev` and `npm run build` were checked successfully during this stage.

The temporary JSON display was replaced by ticket cards in Stage 4.

### Stage 3: Verification Checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S3-R1 | Vite development server starts | `frontend/package.json` | Run `npm install` and `npm run dev` |
| S3-R2 | App title and available-ticket counter | `frontend/src/App.jsx` (Stage 3 version) | View the historical Stage 3 interface |
| S3-R3 | Sample data displayed as JSON | `frontend/src/App.jsx` (Stage 3 version) | Inspect the historical Stage 3 code |
| S3-R4 | Original CSS styles reused | `frontend/src/App.css` | Compare with the static mockup |
| S3-R5 | Production build succeeds | `frontend/` | Run `npm run build` |
| S3-R6 | README and AI log updated | [`ai-log/etapa-03.md`](ai-log/etapa-03.md) | Read documentation |
| S3-R7 | Stage 3 published on GitHub | [Commit history](https://github.com/sebiandrei12/CinemaTicket/commits/main/) | Locate the Stage 3 commit |

AI documentation: [`ai-log/etapa-03.md`](ai-log/etapa-03.md).

## Stage 4: Components rendered from data

Stage 4 replaced the temporary JSON display with reusable React components.

Each ticket is rendered as an individual card generated from the data array.

Two components were introduced in `frontend/src/components/`:

- `TicketList.jsx` receives the list through the `bilete` prop and uses `map()` to render a `TicketCard` for each ticket.
- `TicketCard.jsx` receives one `bilet` object and displays the film title, ticket type, hall, time, seat, screening type and state.

### React components and props

`App.jsx` passes the ticket array to `TicketList`, which passes each ticket to `TicketCard`.

The data flow is:

`App.jsx → TicketList.jsx → TicketCard.jsx`

Each rendered card uses a unique stable key: `key={bilet.id}`.

Adding another item to the source list generates another card without duplicating the JSX layout.

### Conditional rendering and ticket status

When the array is empty, the list displays:

`Nu există niciun bilet.`

The ticket counter can also display zero.

The `gata` property determines the ticket's status:

- `false` — available ticket.
- `true` — sold ticket.

The card style changes according to the status.

### Stage 4: Testing

According to the Stage 4 project log, the three sample ticket cards were checked, including their displayed information and status-dependent styling.

The production build completed successfully.

### Stage 4: Verification Checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S4-R1 | Reusable components | `frontend/src/components/TicketList.jsx`, `TicketCard.jsx` | Inspect both components |
| S4-R2 | Data is passed through props | `frontend/src/App.jsx`, `TicketList.jsx` | Check the component props |
| S4-R3 | List rendering with `map()` and unique keys | `frontend/src/components/TicketList.jsx` | Inspect `map()` and `key={bilet.id}` |
| S4-R4 | Empty list handled | `frontend/src/components/TicketList.jsx` | Check the empty-array branch |
| S4-R5 | Sold and available tickets have different appearance | `frontend/src/components/TicketCard.jsx`, `App.css` | Inspect status styling |
| S4-R6 | README and AI documentation | [`ai-log/etapa-04.md`](ai-log/etapa-04.md) | Read documentation |
| S4-R7 | Stage 4 pushed to GitHub | [Commit history](https://github.com/sebiandrei12/CinemaTicket/commits/main/) | Locate the Stage 4 commit |

AI conversation: [React components, props and list rendering](https://chatgpt.com/share/6ad5e16a-05b8-83eb-abf4-98dadacd8be8).

## Stage 5: Local state and events

Stage 5 made CinemaTicket interactive by managing the ticket list with React `useState` and handling user actions through event callbacks.

Users can change ticket availability, delete tickets and switch between light and dark themes without manually modifying the source data.

### React useState

The original three-ticket array was stored in `BILETE_INITIALE` and used to initialize React state:

```jsx
const [bilete, setBilete] = useState(BILETE_INITIALE);
```

`bilete` represented the current array, while `setBilete` was used to update it.

React re-rendered the interface after state changes.

In Stage 6, this initial state was changed to `useState([])` because the tickets now come from the API.

### Changing ticket status

Each ticket card provides a control to change the status of a ticket.

`handleToggle(id)` finds the matching ticket with `map()` and creates a new object using the spread operator.

Its `gata` value is inverted with `!bilet.gata`.

Other tickets are returned unchanged.

This updates the card's appearance and the available-ticket counter.

### Deleting tickets

Each card contains a delete button.

`handleDelete(id)` uses `filter()` to create a new array that excludes the selected ticket:

```jsx
function handleDelete(id) {
  setBilete((prev) => prev.filter((bilet) => bilet.id !== id));
}
```

The ticket disappears from the interface, and the total and available counts are recalculated.

If all tickets are deleted, the empty-list message is shown.

### Derived values

The number of available tickets is calculated directly from the current list:

```jsx
const active = bilete.filter((bilet) => !bilet.gata).length;
```

This value is not stored in a separate React state variable, avoiding inconsistencies between the displayed counter and the list.

### Props and immutable updates

`App.jsx` owns the state.

`TicketList.jsx` and `TicketCard.jsx` receive the data and event handlers (`onToggle`, `onDelete`) through props.

State changes are immutable:

- `map()` updates a ticket.
- `filter()` removes a ticket.
- The spread operator creates updated objects.

The code does not directly mutate the original state array.

### Light mode and dark mode

The theme is stored using `useState`.

The initial preference is determined with:

```javascript
window.matchMedia("(prefers-color-scheme: dark)")
```

The `handleTema` function switches between `light` and `dark` and updates `document.documentElement.dataset.theme`.

CSS variables define the two color schemes.

The theme button uses `aria-pressed` for accessibility.

### Local state limitations

Ticket changes were not saved permanently in Stage 5.

Refreshing the page restored the original data.

The selected theme was also not stored persistently and returned to the initial system preference after refresh.

### Stage 5: Verification Checklist

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S5-R1 | Ticket list managed with `useState` | `frontend/src/App.jsx` (Stage 5 version) | Inspect the state declaration |
| S5-R2 | Changing ticket status updates the UI | `frontend/src/App.jsx`, `TicketCard.jsx` | Toggle the status control |
| S5-R3 | Immutable updates using `map()` and `filter()` | `frontend/src/App.jsx` | Inspect `handleToggle` and `handleDelete` |
| S5-R4 | Delete button removes a ticket | `frontend/src/components/TicketCard.jsx` | Delete a ticket in the browser |
| S5-R5 | Ticket counters update automatically | `frontend/src/App.jsx` | Change status or delete a ticket |
| S5-R6 | Light/dark theme switching | `frontend/src/App.jsx`, `App.css` | Use the theme toggle button |
| S5-R7 | README and AI log | [`ai-log/etapa-05.md`](ai-log/etapa-05.md) | Read documentation |
| S5-R8 | Stage 5 pushed to GitHub | [Commit history](https://github.com/sebiandrei12/CinemaTicket/commits/main/) | Locate the Stage 5 commit |

AI conversation: [Stage 5 — local state and events](https://chatgpt.com/share/6adf2cde-50a4-83eb-afec-ca32540fb8dd).

## Stage 6: Data from a mock API

Stage 6 moves the ticket data from React source code into `frontend/db.json` and loads it through a local REST API built with `json-server` version `0.17.4`.

The application loads data when the component mounts using `useEffect`, shows a loading message while waiting, displays tickets on success and displays an explicit error message when the request fails.

### Technologies used

- React `useState` and `useEffect`.
- Fetch API and `async`/`await`.
- `json-server@0.17.4`.
- JSON data in `db.json`.
- Vite environment variables.

### API configuration

The API runs on port `3001` and exposes the endpoint:

`http://localhost:3001/bilete`

The database contains five tickets: three available and two sold.

Their data is no longer hardcoded in `App.jsx`.

The `frontend/package.json` file includes:

```json
"api": "json-server --watch db.json --port 3001"
```

The `frontend/src/api.js` file contains the HTTP request:

```javascript
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchBilete() {
  const res = await fetch(`${API_URL}/bilete`);

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.json();
}
```

The variable `VITE_API_URL` is documented in `frontend/.env.example`.

When it is not set, the application uses `http://localhost:3001` as the fallback address.

### Loading data with useEffect

The React component initializes the ticket list as an empty array and defines separate states for loading and error:

```jsx
const [bilete, setBilete] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

`useEffect` calls `fetchBilete()` after mounting.

A `try/catch/finally` block processes successful and failed requests.

Its cleanup function sets `ignore = true`, preventing a state update after cleanup.

### Application states

CinemaTicket handles three states:

1. **Loading** — displays `Se încarcă biletele...` while the request is pending.
2. **Success** — displays tickets through `TicketList` and `TicketCard`.
3. **Error** — displays a message explaining that tickets could not be loaded and suggests checking `npm run api`.

The messages have dedicated CSS styling in `frontend/src/App.css`.

### Functionality preserved

- Displaying available and sold tickets.
- Changing ticket status locally.
- Deleting a selected ticket locally.
- Automatically updating ticket counters.
- Switching between light and dark mode.
- Displaying loading and error messages.

Ticket modifications remain **local to React state** in Stage 6.

They do not update the API.

Refreshing the page loads the original `db.json` data again.

Server persistence is planned for Stage 7.

### Stage 6: Verification

The following checks were completed during implementation:

- The API started and returned JSON at `/bilete`.
- React loaded and displayed the five tickets.
- The header showed three available tickets.
- Deleting a ticket removed it and updated the counters.
- Refreshing the page restored the deleted ticket from the API.

The loading and error messages are implemented in the code.

Their separate tests using an artificial delay and a stopped API were not performed during this session.

### Stage 6: Verification Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S6-R1 | `npm run api` starts and the API returns JSON | [package.json](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/package.json), [db.json](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/db.json) | Run `npm run api` and open `localhost:3001/bilete` |
| S6-R2 | Data is no longer hardcoded in React | [App.jsx](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/src/App.jsx), [db.json](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/db.json) | Check `useState([])` and `useEffect` |
| S6-R3 | Loading message is implemented | [App.jsx](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/src/App.jsx) | Start API with `--delay 4000` and refresh |
| S6-R4 | Error message is implemented | [App.jsx](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/src/App.jsx) | Stop the API and refresh |
| S6-R5 | Fetch is isolated in api.js and API URL uses environment variables | [api.js](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/src/api.js), [.env.example](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/frontend/.env.example) | Check `fetch`, `res.ok` and `VITE_API_URL` |
| S6-R6 | README Stage 6 section and AI log are completed | [README.md](https://github.com/sebiandrei12/CinemaTicket/blob/main/README.md), [AI log](https://github.com/sebiandrei12/CinemaTicket/blob/e5910d5/ai-log/etapa-06.md) | Read the documentation |
| S6-R7 | Stage 6 implementation committed and pushed to GitHub | [Stage 6 commit](https://github.com/sebiandrei12/CinemaTicket/commit/e5910d5) | Check the GitHub commit history |

The Stage 6 implementation was published on GitHub in commit `e5910d5`.

The verification checklist uses permanent links to the Stage 6 implementation.

The final README checklist is published in a separate commit named `Stage 6: checklist`.

AI documentation: [`ai-log/etapa-06.md`](ai-log/etapa-06.md).

## Technologies used

- HTML5 and CSS3.
- JavaScript and JSX.
- React and Vite.
- Node.js and npm.
- React Hooks (`useState`, `useEffect`).
- Fetch API and `json-server`.
- Git and GitHub.

## How to run

### Stages 1 and 2: Static mockup

Open `mockup/index.html` using Live Server or directly in the browser.

Use the browser developer tools (F12) to inspect the JavaScript console tests.

### Stages 3–6: React application

From the main project directory:

```bash
cd frontend
npm install
```

In **terminal 1**, start the API:

```bash
npm run api
```

The endpoint is:

`http://localhost:3001/bilete`

In **terminal 2**, from the same `frontend` directory, start React:

```bash
npm run dev
```

Open the address displayed by Vite, usually:

`http://localhost:5173/`

Both servers must remain running to load tickets from the local API.

## Build verification

From `frontend/`, run:

```bash
npm run build
```

The production build was confirmed in earlier project stages.

The Stage 6 build should be checked again before final submission.

Generated folders such as `dist/` and `node_modules/` should not be committed.

## AI usage

| Tool | Used for |
| --- | --- |
| ChatGPT | HTML structure, CSS Grid, Flexbox, responsive design and dark mode in Stage 1 |
| ChatGPT | JavaScript arrays, data manipulation, validation and console tests in Stage 2 |
| ChatGPT | React/Vite setup, project structure, counter calculation and troubleshooting in Stage 3 |
| ChatGPT | React components, props, `map()`, `key`, conditional rendering and documentation in Stage 4 |
| ChatGPT | `useState`, immutable updates, callbacks, delete and toggle actions, theme switching in Stage 5 |
| ChatGPT | `json-server`, `db.json`, `fetch`, `useEffect`, loading/error handling and troubleshooting in Stage 6 |

The detailed AI-assisted work is documented in the files `ai-log/etapa-01.md` through `ai-log/etapa-06.md`.

## Project status

- [x] Stage 1: Static HTML/CSS mockup.
- [x] Stage 2: JavaScript data logic.
- [x] Stage 3: Vite and React project.
- [x] Stage 4: Components rendered from data.
- [x] Stage 5: Local state and events.
- [x] Stage 6: Data from a mock API (implemented and published on GitHub).
- [ ] Stage 7: Form, validation and API persistence.

## Repository

[CinemaTicket on GitHub](https://github.com/sebiandrei12/CinemaTicket)
