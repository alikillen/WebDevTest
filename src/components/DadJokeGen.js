import React from "react";
import "../App.css";

/* 
    Q. 2
    Using the browser Fetch API, fetch a random Dad Joke from the following endpoint and log it to the console
    Note: set the header "Accept: application/json"
    API endpoint: https://icanhazdadjoke.com/
*/

function DadJokeGen() {
  function fetchDadJoke() {
    // const joke = document.getElementById("dad-joke");

    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Your dad joke is: " + data.joke);
      });
  }

  return (
    <>
      <div className='DadJokeGen'>
        <h1>JS Challenge Q2 - Random Dad Joke Generator</h1>
        <p>
          My solutions to the other JS challenges are within the /challenges
          folder of this repo - there is a file with the solutions called
          JSChallenges.js. They can be run in an IDE to test them.
        </p>
        <p>
          Jokes from the
          <a href='https://icanhazdadjoke.com/api'>icanhazdadjoke</a> API
        </p>

        <button className='joke-btn' onclick={fetchDadJoke()}>
          Fetch me a joke to console
        </button>

        {/* <h2>Your Dad joke is...</h2>
        <p className='dad-joke' id='dad-joke'>{`${fetchDadJoke}`}</p> */}
      </div>
    </>
  );
}

export default DadJokeGen;
