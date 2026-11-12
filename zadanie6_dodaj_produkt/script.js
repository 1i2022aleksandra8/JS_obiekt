const formularz = document.querySelector('#formularz');
const nazwa = document.querySelector('#nazwa');
const cena = document.querySelector('#cena');
const tableBody = document.querySelector('#tableBody');
const wynik = document.querySelector('#wynik');

const produkty = [
    { nazwa: "Kakao", cena: 8.5 },
    { nazwa: "Chleb", cena: 4.2 }
];

function pokazTabele() {
    tableBody.innerHTML = "";

    for (let i = 0; i < produkty.length; i++) {
        const tr = document.createElement('tr');

        const tdNazwa = document.createElement('td');
        tdNazwa.textContent = produkty[i].nazwa;

        const tdCena = document.createElement('td');
        tdCena.textContent = produkty[i].cena + " zł";

        tr.appendChild(tdNazwa);
        tr.appendChild(tdCena);

        tableBody.appendChild(tr);
    }
}

pokazTabele();

formularz.addEventListener("submit", function (e) {
    e.preventDefault();
    const nowaNazwa = nazwa.value.trim();
    const nowaCena = Number(cena.value);
    if (nowaNazwa === "") {
        wynik.textContent = "Podaj nazwę";
        return;
    }
    produkty.push({
        nazwa: nowaNazwa,
        cena: nowaCena
    });
    pokazTabele();
    formularz.reset();
    wynik.textContent = "Dodano: " + nowaNazwa;
});
