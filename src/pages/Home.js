import "../App.css"
// import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import TextGenerator from "../components/TextGenerator"
// import GreetingCard from "../components/GreetingCard"
import RawHTML from "../components/RawHTML"

import React from 'react'

function Home() {
  return (
    <div>
    {/* <Navbar /> */}
    <HeroSection />
    <TextGenerator />
    <JSChallenges />
    {/* <GreetingCard /> */}
    {/* <RawHTML /> */}
      
    </div>
  )
}

export default Home
