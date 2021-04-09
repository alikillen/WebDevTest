import React from "react";
import "../App.css";
import MobileVideo from "../media/Homepage_Brand_Video_Mobile_Compressed.mp4";
import DesktopVideo from "../media/Homepage_Brand_Video_Desktop_Compressed.mp4";

import { useMediaQuery } from "../helpers/MediaQueries";

function HeroSection() {
  let isPageDesktop = useMediaQuery("(min-width: 800px)");
  let isPageMobile = useMediaQuery("(max-width: 800px)");
  return (
    <div className='hero-container'>
      {/* video needs to be CONDITIONALLY RENDERED DEPENDING ON MOBILE/DESKTOP */}

      {isPageDesktop && (
        <video className='hero-video' src={DesktopVideo} autoPlay loop muted />
      )}
      {isPageMobile && (
        <video className='hero-video' src={MobileVideo} autoPlay loop muted />
      )}
      <div className='hero-text'>
        <p className='hero-intro'>Home of teeth whitening</p>
        <h1 className='hero-title'>Hismile Homepage</h1>
        <p className='hero-tagline'>We care about smile care</p>
        <br></br>

        <div className='hero-buttons'>
          <button className='hero-shop-button'>
            <p>Shop the teeth whitening kit</p>
          </button>
          <button className='hero-video-button'>
            <p>Watch the video</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
