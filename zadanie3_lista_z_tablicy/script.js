const ul = document.querySelector('#lista');

const produkty = [
    { nazwa: "Mleko", cena: 3.5, dostepny: true },
    { nazwa: "Chleb", cena: 4.2, dostepny: false },
    { nazwa: "Masło", cena: 5.3, dostepny: true }
];

function pokazListe() {
ul.innerHTML = "";
    for (let i = 0; i < produkty.length; i++) {
        const li = document.createElement("li");
        li.textContent = produkty[i].nazwa;
        ul.appendChild(li);
    }
};


pokazListe();