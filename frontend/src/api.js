
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună pentru toate cererile HTTP
async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });

    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }

    return res.status === 204 ? null : res.json();
}

// GET - Preia toate biletele
export function fetchBilete() {
    return request("/bilete");
}

// GET - Preia un singur bilet după ID (Etapa 8)
export function fetchBilet(id) {
    return request(`/bilete/${encodeURIComponent(id)}`);
}

// POST - Adaugă un bilet nou
export function createBilet(bilet) {
    return request("/bilete", {
        method: "POST",
        body: JSON.stringify(bilet)
    });
}

// PATCH - Modifică starea unui bilet
export function updateBilet(id, changes) {
    return request(`/bilete/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes)
    });
}

// DELETE - Șterge un bilet
export function deleteBilet(id) {
    return request(`/bilete/${id}`, {
        method: "DELETE"
    });
}
