//DOM

//Dohvatanje elementa po id-u
let paragraf = (document.getElementById("demo").style.color = "red");

//Dohvatanje elementa po klasi
const listItems = document.getElementsByClassName("list-group-fruit");
console.log(listItems);
function klik() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "red";
  }
}

//Dohvatanje elementa po tag-u
const listItemsTag = document.getElementsByTagName("li");

let p = document.querySelector(".demo");

//Forme
const handleSubmit = (e) => {
  e.preventDefault();
};

const validacija = () => {
  let vrednosti = document.forms["forma"]["first-name"].value;
  if (vrednosti == "") {
    alert("Morate popuniti prazno polje");
    return false;
  } else {
    alert("Uspesno");
  }
};

//Napraviit login formu, ulepsati je u css i napraviti validaciju
//BONUS: jos jedno polje potvrdi sifru
