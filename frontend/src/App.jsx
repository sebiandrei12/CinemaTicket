
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";

import BiletePage from "./pages/BiletePage.jsx";
import BiletDetaliuPage from "./pages/BiletDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Etapa 8 - Configurarea rutelor CinemaTicket
export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* Pagina principală: formular și lista biletelor */}
                <Route
                    path="/"
                    element={<BiletePage />}
                />

                {/* Pagina de detaliu pentru un singur bilet */}
                <Route
                    path="/bilete/:id"
                    element={<BiletDetaliuPage />}
                />

                {/* Pagina de prezentare a aplicației */}
                <Route
                    path="/despre"
                    element={<DesprePage />}
                />

                {/* Pagina 404 pentru adrese inexistente */}
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Route>
        </Routes>
    );
}
