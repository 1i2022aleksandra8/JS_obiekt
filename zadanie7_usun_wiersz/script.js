const tableBody = document.querySelector('#tableBody');

const produkty = [
    { nazwa: "Mleko", cena: 3.5 },
    { nazwa: "Chleb", cena: 4.2 },
    { nazwa: "Masło", cena: 5.3 }
];

function pokazTabele() {
    tableBody.innerHTML = "";

    for (let i = 0; i < produkty.length; i++) {
        const tr = document.createElement('tr');

        const tdNazwa = document.createElement('td');
        tdNazwa.textContent = produkty[i].nazwa;

        const tdCena = document.createElement('td');
        tdCena.textContent = produkty[i].cena + " zł";

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
        tr.appendChild(tdUsun);

        tableBody.appendChild(tr);
    }
}

pokazTabele();