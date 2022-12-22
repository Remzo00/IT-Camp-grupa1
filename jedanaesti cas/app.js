//1. Kreirati niz koji sadrzi elemente a,b,c,d i promeniti element b da ispisuje slovo m
//2. Kreirati niz od 10 elemenata nasumicnih brojeva i pomocu metode reduce prikazati zbir istih
//3. Pretvoriti iz Celzijusa u Farenhajt

let niz = ["a", "b", "c", "d"];
niz[1] = "m";
console.log(niz);

let brojevi = [1, 5, 7, 10, 20, 18, 29, 87, 100, 4];

const zbir = brojevi.reduce((total, broj) => {
  return total + broj;
});

console.log(zbir);

const covertCelsius = (celsius) => {
  return celsius * (9 / 5) + 32;
};
covertCelsius(3);
