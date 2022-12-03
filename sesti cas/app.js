//1.Dopuniti recenicu da pise Learning to code is fun koristeci spread operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["Learning", ...fragment, "is fun"];
  return sentence;
}

console.log(spreadOut());

//2. Ispisati online usere

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Dodati liniju koda ispod
console.log((userActivity.data.online = 50));
// dodadi liniju koda iznad

//3.Modifikuj funkciju tako da niz ispisuje samo warm i sunny
function forecast(arr) {
  // Dodati liniju koda ispod
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
