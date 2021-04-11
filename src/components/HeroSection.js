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
      {isPageDesktop && (
        <video className='hero-video' src={DesktopVideo} autoPlay loop muted />
      )}
      {isPageMobile && (
        <video className='hero-video' src={MobileVideo} autoPlay loop muted />
      )}
      <div className='hero-text'>
        <h3 className='hero-intro'>Home of teeth whitening</h3>
        <h1 className='hero-title'>Hismile Homepage</h1>
        <h3 className='hero-tagline'>We care about smile care</h3>
        <br></br>

        <div className='hero-buttons'>
          <button className='hero-shop-button'>
            <h3>Shop the teeth whitening kit</h3>
          </button>
          <br></br>
          <button className='hero-video-button'>
            <h3>Watch the video</h3>
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
