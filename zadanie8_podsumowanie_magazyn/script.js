const formularz = document.querySelector('#formularz');
const nazwa = document.querySelector('#nazwa');
const cena = document.querySelector('#cena');
const ilosc = document.querySelector('#ilosc');
const sortCena = document.querySelector('#sortCena');
const tableBody = document.querySelector('#tableBody');
const wynik = document.querySelector('#wynik');
const sumaElement = document.querySelector('#suma');

const produkty = [
    { nazwa: "Kakao", cena: 8, ilosc: 2 },
    { nazwa: "Chleb", cena: 4.2, ilosc: 1 },
    { nazwa: "Masło", cena: 5.3, ilosc: 3 }
];

function pokazTabele() {
    tableBody.innerHTML = "";

    let suma = 0;

    for (let i = 0; i < produkty.length; i++) {
        const tr = document.createElement('tr');
        const tdNazwa = document.createElement('td');
        tdNazwa.textContent = produkty[i].nazwa;
        const tdCena = document.createElement('td');
        tdCena.textContent = produkty[i].cena;
        const tdIlosc = document.createElement('td');
        tdIlosc.textContent = produkty[i].ilosc;
        const tdUsun = document.createElement('td');
        const btn = document.createElement('button');

        btn.textContent = "Usuń";
        const indeks = i;

        btn.addEventListener('click', function () {
            produkty.splice(indeks, 1);
            pokazTabele();
        });

        tdUsun.appendChild(btn);
        tr.appendChild(tdNazwa);
        tr.appendChild(tdCena);
        tr.appendChild(tdIlosc);
        tr.appendChild(tdUsun);
        tableBody.appendChild(tr);
        suma += produkty[i].cena * produkty[i].ilosc;
    }

    sumaElement.textContent = String(suma);
}

formularz.addEventListener('submit', function (e) {
    e.preventDefault();

    const nazwaProduktu = nazwa.value.trim();
    const cenaProduktu = Number(cena.value);
    const iloscProduktu = Number(ilosc.value);
    if (nazwaProduktu === "") {
        wynik.textContent = "Podaj nazwę";
        return;
    }
    if (
        cena.value.trim() === "" ||
        ilosc.value.trim() === "" ||
        !Number.isFinite(cenaProduktu) ||
        !Number.isFinite(iloscProduktu) ||
        cenaProduktu < 0 ||
        iloscProduktu <= 0
    ) {
        wynik.textContent = "Podaj poprawną cenę i ilość";
        return;
    }
    produkty.push({
        nazwa: nazwaProduktu,
        cena: cenaProduktu,
        ilosc: iloscProduktu
    });
    pokazTabele();
    formularz.reset();
    wynik.textContent = "Dodano: " + nazwaProduktu;
});

sortCena.addEventListener('click', function () {
    produkty.sort(function (a, b) {
        return b.cena - a.cena;
    });
    pokazTabele();
});
