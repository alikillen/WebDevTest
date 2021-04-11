import React from "react";

/* 
    Q. 2
    Using the browser Fetch API, fetch a random Dad Joke from the following endpoint and log it to the console
    Note: set the header "Accept: application/json"
    API endpoint: https://icanhazdadjoke.com/
*/

function JSChallenges() {
  function fetchDadJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  console.log(fetchDadJoke());

  return <div>{fetchDadJoke()}</div>;
}

export default JSChallenges;
