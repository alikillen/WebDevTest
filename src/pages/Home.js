import "../App.css";

import HeroSection from "../components/HeroSection";
import TextGenerator from "../components/TextGenerator";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <HeroSection />
      <TextGenerator />

      <div className='extra-pages'>
        Other Links:
        <br></br>
        <Link to='/Questions' className='page-links'>
          Web Dev Test Questions
        </Link>
        <br></br>
        <Link to='/DadJokeGenPage' className='page-links'>
          Dad Joke Generator (JS Questions - Q2)
        </Link>
      </div>
    </div>
  );
}

export default Home;
