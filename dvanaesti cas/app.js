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

let p = document.querySelector("demo");
