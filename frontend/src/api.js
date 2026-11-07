
// Adresa serverului API
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Preia biletele de pe server
export async function fetchBilete() {
    const res = await fetch(`${API_URL}/bilete`);

    if (!res.ok) {
        throw new Error(`Eroare server: ${res.status}`);
    }

    return res.json();
}