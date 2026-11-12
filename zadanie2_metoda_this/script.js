const opisBtn = document.querySelector('#opisBtn');
const wynik = document.querySelector('#wynik');

const ksiazka = {
    tytul: "Lalka",
    autor: "Bolesław Prus",
    karta: function () {
      return this.tytul + " — " + this.autor;
    },
  };

opisBtn.addEventListener('click', function(e){
    e.preventDefault();
    wynik.textContent = `${ksiazka.karta()}`;
});