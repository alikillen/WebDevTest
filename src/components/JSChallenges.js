import React from "react";
import "../styles/JSChallenges.css";
import "../App.css";

/* 
    Q. 2
    Using the browser Fetch API, fetch a random Dad Joke from the following endpoint and log it to the console
    Note: set the header "Accept: application/json"
    API endpoint: https://icanhazdadjoke.com/
*/

function JSChallenges() {
  function fetchDadJoke() {
    const joke = document.getElementById("dad-joke");

    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Your dad joke is: " + data.joke);
        joke.innerHTML = `${data.joke}`;
      });
  }

  return (
    <>
      <h1>Random Dad Joke Generator</h1>
      <p>
        Jokes from the
        <a href='https://icanhazdadjoke.com/api'>icanhazdadjoke</a> API
      </p>

      <button className='joke-btn' onclick={fetchDadJoke()}>
        Fetch me a joke
      </button>

      <h2>Your Dad joke is...</h2>
      <p className='dad-joke' id='dad-joke'></p>
    </>
  );
}

export default JSChallenges;
