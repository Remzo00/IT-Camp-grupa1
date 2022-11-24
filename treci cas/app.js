const fruit = ["apple", "banana", "orange"];
fruit.shift();
console.log(fruit);

const arr = ["brojevi "];
//kopirali smo niz arr i prosledili ga u arr2
const arr2 = [...arr, 7, 8];
console.log(arr2);

//Metode za rad sa nizovima
//1. push -> dodaje element na kraju niza
//2. unshift -> dodaje element na pocetak niza
//3. pop ->  brise element na kraj niza
//4. shift -> brise element na pocetak niza
//5. slice -> ne menja niz, vec vraca samo selektovane elemente iz niza
//6. splice -> menja niz i vraca selektovane elemente
//7. spread operator(...niz) -> pravi kopiju tog niza koji smo oznacili
// slice i splice vracaju selektovane elemente

//formula za metodu slice
//slice(start, end)
