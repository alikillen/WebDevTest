// Web Dev Recruitment test

// 3. JavaScript
// Download the following JS file and answer the questions within.

/*
    Q. 1
    Without using Array.prototype.concat(), merge these 2 arrays in 1 line of code
*/
const arr1 = ["this", "is", "an", "array"];
const arr2 = [1, 2, 3, 4];
let merged = [...arr1, ...arr2]
console.log("solution to Q1 - using spread operator: " + merged)

// alternative solution to Q1
console.log("alternative solution to Q1 using Array.of(): " + Array.of(arr1, arr2))
/* 
    Q. 2
    Using the browser Fetch API, fetch a random Dad Joke from the following endpoint and log it to the console
    Note: set the header "Accept: application/json"
    API endpoint: https://icanhazdadjoke.com/
*/

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log("Your dad joke is: " + data.joke));
}

fetchDadJoke()

/*
    Q. 3
    Given the following data structure, return an array of objects that have a colour "red".
*/
const structure = [
  {
    id: 1,
    color: "red",
    name: "Apple",
  },
  {
    id: 2,
    color: "pink",
    name: "Flower",
  },
  {
    id: 3,
    color: "red",
    name: "Tomato",
  },
  {
    id: 4,
    color: "green",
    name: "Apple",
  },
  {
    id: 5,
    color: "black",
    name: "Hat",
  },
  {
    id: 6,
    color: "yellow",
    name: "Tree",
  },
];

let reds = structure.filter((obj) => obj.color === "red");
console.log(reds);
