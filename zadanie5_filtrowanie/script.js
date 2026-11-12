const tylkoDostepne = document.querySelector('#tylkoDostepne');
const wszystkie = document.querySelector('#wszystkie');
const lista = document.querySelector('#lista');

const produkty = [
    { nazwa: "Mleko", cena: 3.5, dostepny: true },
    { nazwa: "Chleb", cena: 4.2, dostepny: false },
    { nazwa: "Masło", cena: 5.3, dostepny: true }
];

function pokazListe(list) {
    let i = 0;
    lista.innerHTML = "";

    while (i < list.length) {
        const li = document.createElement('li');
        li.innerText = list[i].nazwa;
        lista.appendChild(li);

        i = i + 1;
    }
}

pokazListe(produkty);

tylkoDostepne.addEventListener('click', function () {
    const dostepne = produkty.filter(function (p) {
        return p.dostepny === true;
    });

    pokazListe(dostepne);
});

wszystkie.addEventListener('click', function () {
    pokazListe(produkty);
});
