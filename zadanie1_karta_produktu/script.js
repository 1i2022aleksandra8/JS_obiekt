const nazwa = document.querySelector('#nazwa');
const cena = document.querySelector('#cena');
const stan = document.querySelector('#stan');
const pokaz = document.querySelector('#pokaz');

const produkt = {
    nazwa: "Mleko 2%",
    cena: 3.5,
    stan: 12,
  };

pokaz.addEventListener('click', function(e){
    e.preventDefault();
    nazwa.textContent = `${produkt.nazwa}`;
    cena.textContent = `${produkt.cena} zł`;
    stan.textContent = `${produkt.stan} szt.`;
})