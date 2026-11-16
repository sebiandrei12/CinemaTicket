# Etapa 5 — State local și evenimente în React

## 1. Obiectiv

Obiectivul acestei etape a fost adăugarea interactivității în aplicația CinemaTicket prin utilizarea stării locale React (`useState`) și a funcțiilor de tratare a evenimentelor.

## 2. Funcționalități implementate

### 2.1. Gestionarea stării biletelor

Lista de bilete este gestionată în componenta `App.jsx` cu ajutorul hook-ului `useState`. Modificările asupra listei determină actualizarea interfeței prin mecanismul de randare React.

### 2.2. Marcarea biletelor

Fiecare card de bilet conține un checkbox controlat care permite schimbarea stării biletului. La bifare, biletul este marcat ca vândut, iar aspectul său vizual se actualizează. La debifare, biletul revine la starea disponibilă.

### 2.3. Ștergerea biletelor

Fiecare card conține un buton „Șterge”, care elimină biletul selectat din listă. Actualizarea se realizează fără modificarea directă a listei existente în stare.

### 2.4. Actualizarea contorului

Numărul biletelor disponibile este calculat pe baza listei curente, folosind filtrarea biletelor care nu sunt marcate ca vândute. Contorul se actualizează automat atunci când starea unui bilet se modifică sau când un bilet este șters.

### 2.5. Comutarea temei

A fost implementat un buton pentru comutarea între tema luminoasă și tema întunecată. Starea temei este gestionată prin `useState`, iar tema activă este aplicată prin atributul `data-theme` al elementului HTML. Culorile interfeței sunt definite cu ajutorul variabilelor CSS.

## 3. Fișiere modificate

- `frontend/src/App.jsx`
- `frontend/src/components/TicketList.jsx`
- `frontend/src/components/TicketCard.jsx`
- `frontend/src/App.css`
- `ai-log/etapa-05.md`

## 4. Verificări efectuate

Au fost efectuate următoarele verificări manuale:

- Marcarea unui bilet ca vândut și verificarea actualizării contorului.
- Comutarea între tema luminoasă și tema întunecată.
- Ștergerea unui bilet din listă.
- Compilarea proiectului cu ajutorul comenzii `npm run build`.

**Rezultat:** comanda `npm run build` a fost executată cu succes, fără erori de compilare.

## 5. Utilizarea AI

AI a fost utilizat ca instrument de asistență pentru înțelegerea și implementarea funcționalităților din Etapa 5. Conversația a abordat următoarele subiecte:

- Organizarea componentelor `App.jsx`, `TicketList.jsx` și `TicketCard.jsx`.
- Gestionarea listei de bilete prin `useState`.
- Implementarea funcțiilor pentru marcarea și ștergerea biletelor.
- Transmiterea funcțiilor prin `props` și actualizarea imutabilă a stării.
- Calcularea dinamică a numărului de bilete disponibile.
- Implementarea temelor luminoasă și întunecată folosind React și CSS.
- Verificarea funcționalităților și compilarea proiectului.

**Link către conversația AI:**  
https://chatgpt.com/share/6adf2cde-50a4-83eb-afec-ca32540fb8dd

## 6. Concluzie

În urma acestei etape, aplicația CinemaTicket permite interacțiunea cu lista de bilete prin marcarea acestora ca vândute, ștergerea lor și comutarea temei interfeței. Starea aplicației