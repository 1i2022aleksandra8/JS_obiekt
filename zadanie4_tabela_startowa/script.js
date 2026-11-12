const tbody = document.querySelector('#tableBody');

const produkty = [
    { tytul: "Lalka", autor: "Bolesław Prus", rok: 1890 },
    { tytul: "Rok 1984", autor: "George Orwell", rok: 1948 },
    { tytul: "Balladyna", autor: "Juliusz Słowacki", rok: 1839 },
];

function pokazTabele() {
    tbody.innerHTML = "";
    for (let i = 0; i < produkty.length; i++) {
      const tr = document.createElement("tr");
      const tdNazwa = document.createElement("td");
      tdNazwa.textContent = produkty[i].tytul;
      const tdAutor = document.createElement("td");
      tdAutor.textContent = produkty[i].autor;
      const tdRok = document.createElement("td");
      tdRok.textContent = produkty[i].rok;
      tr.appendChild(tdNazwa);
      tr.appendChild(tdAutor);
      tr.appendChild(tdRok);
      tbody.appendChild(tr);
    }
}


pokazTabele();