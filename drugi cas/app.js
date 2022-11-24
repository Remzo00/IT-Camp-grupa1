//Objekat
var bmw = { boja: "bela", model: "x6" };
console.log(bmw);

var osoba = {
  ime: "Neko",
  godine: 55,
  zanimanje: "Programer",
  drzavljanstvo: "Nemac",
};

//Na ovaj nacin pristupamo propertijima u objektu
var dajGodine = osoba.drzavljanstvo;
//moze i ovako
console.log(osoba.godine);

//Nizovi
//Lenght meri duzinu niza
//Sort sortira nizove
//Brojanje nizova pocinje od 0
var cars = ["Bmw", "Audi", "Mercedes", "Fiat"];
// var car = cars.length;
var car = cars[1];
console.log(car);

//Dodavanje elementata u prazan niz
var automobili = [];
automobili[0] = "Bmw";
automobili[1] = "Audi";
console.log(automobili);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits.sort());

//TIPOVI PODATAKA
//SLOZENI TIPOVI PODATAKA nam omogucavaju da smestimo vise vrednosti u jednu promenljivu
//Objekat
//Niz
//Funkcija

//Aritmeticki operatori
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

// = dodeljuje vrednost
// == uporedjuje samo vrednost bez obriza na tip
// === uporedjuje i tip i vrednost
var x = 5;
var y = "5";
console.log(x === y);
