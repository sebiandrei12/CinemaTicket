// Datele aplicației

const bilete = [
    {
        id: 1,
        titlu: "Avatar",
        gata: false,
        tip: "standard",
        sala: 4,
        ora: "19:30",
        loc: "A12",
        proiectie: "2D"
    },

    {
        id: 2,
        titlu: "Oppenheimer",
        gata: true,
        tip: "vip",
        sala: 2,
        ora: "21:00",
        loc: "B07",
        proiectie: "IMAX"
    },

    {
        id: 3,
        titlu: "Dune: Part Two",
        gata: false,
        tip: "student",
        sala: 1,
        ora: "18:00",
        loc: "C15",
        proiectie: "3D"
    }
];


// Tipurile de bilete permise

const TIPURI_BILET = [
    "standard",
    "vip",
    "student"
];


// 1. Listarea titlurilor

function listeazaTitluri(lista) {
    return lista.map((bilet) => bilet.titlu);
}


// 2. Numărarea biletelor active/disponibile

function numaraActive(lista) {
    return lista.filter((bilet) => !bilet.gata).length;
}


// 3. Căutarea după titlu

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();

    return lista.filter((bilet) =>
        bilet.titlu.toLowerCase().includes(textCautat)
    );
}


// 4. Căutarea unui bilet după ID

function cautaDupaId(lista, id) {
    return lista.find((bilet) => bilet.id === id);
}


// 5. Generarea următorului ID

function nextId(lista) {
    return lista.reduce(
        (max, bilet) => Math.max(max, bilet.id),
        0
    ) + 1;
}


// 6. Adăugarea unui bilet cu validare

function adaugaBilet(
    lista,
    titlu,
    tip = "standard"
) {
    const titluCurat = titlu.trim();

    // Verificare titlu
    if (titluCurat === "") {
        console.log("Eroare: titlul filmului nu poate fi gol.");
        return lista;
    }

    // Verificare tip bilet
    if (!TIPURI_BILET.includes(tip)) {
        console.log("Eroare: tipul biletului nu este valid.");
        return lista;
    }

    const biletNou = {
        id: nextId(lista),
        titlu: titluCurat,
        gata: false,
        tip: tip,
        sala: 1,
        ora: "20:00",
        loc: "D01",
        proiectie: "2D"
    };

    return [...lista, biletNou];
}


// 7. Comutarea stării unui bilet

function comutaVandut(lista, id) {
    return lista.map((bilet) =>
        bilet.id === id
            ? { ...bilet, gata: !bilet.gata }
            : bilet
    );
}


// 8. Ștergerea unui bilet

function stergeBilet(lista, id) {
    return lista.filter((bilet) => bilet.id !== id);
}


// ======================================================
// TESTE ÎN CONSOLĂ
// ======================================================


console.log("--- Citire ---");


// Listarea titlurilor

console.log(
    "Titluri:",
    listeazaTitluri(bilete).join(", ")
);


// Numărarea biletelor disponibile

console.log(
    "Active:",
    numaraActive(bilete)
);


// Căutarea după titlu

console.log(
    "Căutare 'avatar':",
    listeazaTitluri(
        cautaDupaTitlu(bilete, "avatar")
    ).join(", ")
);


// Căutarea după ID

console.log(
    "Biletul cu id 2:",
    cautaDupaId(bilete, 2)
);


// ======================================================
// ADĂUGARE
// ======================================================

console.log("--- Adăugare ---");


let lista = adaugaBilet(
    bilete,
    "Interstellar",
    "vip"
);


console.log(
    "Lista nouă:",
    lista.length,
    "bilete"
);


// Verificăm că lista originală nu a fost modificată

console.log(
    "Originalul a rămas cu:",
    bilete.length,
    "bilete"
);


// ======================================================
// MODIFICARE ȘI ȘTERGERE
// ======================================================

console.log("--- Modificare și ștergere ---");


// Schimbăm starea biletului cu ID 1

lista = comutaVandut(lista, 1);


console.log(
    "După schimbarea stării id 1, active:",
    numaraActive(lista)
);


// Ștergem biletul cu ID 3

lista = stergeBilet(lista, 3);


console.log(
    "După ștergerea id 3:",
    listeazaTitluri(lista).join(", ")
);


// ======================================================
// VALIDARE
// ======================================================

console.log("--- Validare ---");


// Titlu gol

adaugaBilet(lista, " ");


// Tip de bilet invalid

adaugaBilet(
    lista,
    "Film invalid",
    "urgenta"
);