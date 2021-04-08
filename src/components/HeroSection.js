import React from "react";
import "../App.css";
import MobileVideo from "../media/Homepage_Brand_Video_Mobile_Compressed.mp4";
import DesktopVideo from "../media/Homepage_Brand_Video_Desktop_Compressed.mp4";

import { useMediaQuery } from "../helpers/MediaQueries"

function HeroSection() {
  let isPageDesktop = useMediaQuery("(min-width: 800px)");
  let isPageMobile = useMediaQuery("(max-width: 800px)")
  return (
    <div className='hero-container'>
      {/* video needs to be CONDITIONALLY RENDERED DEPENDING ON MOBILE/DESKTOP */}

      {isPageDesktop && (
        <video className='hero-video' src={DesktopVideo} autoPlay loop muted />
      )}
      {isPageMobile && (
        <video className='hero-video' src={MobileVideo} autoPlay loop muted />
      )}

      <p>Home of teeth whitening</p>
      <h1>Hismile Homepage</h1>
      <p>We care about smile care</p>
      <br></br>

      <button className='hero-button'>
        <p>This is a button</p>
      </button>
    </div>
  );
}

export default HeroSection;
