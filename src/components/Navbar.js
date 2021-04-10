import React, { useState } from 'react'
import BurgerButton from "../components/BurgerButton"
import { useMediaQuery } from "../helpers/MediaQueries";
import "../App.css"
import "../styles/Navbar.css"

// import button





function Navbar() {


  let isPageDesktop = useMediaQuery("(min-width: 800px)");
  let isPageMobile = useMediaQuery("(max-width: 800px)");


  const [showLinks, setShowLinks] = useState(false);


  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div className={isPageDesktop ? "links-desktop" : 'links' } id={showLinks ? "hidden" : ""}>
          {/* {isPageMobile && (
            <a className='home-link' href='/'>
              Home
            </a>
          )} */}
          <a
            className='shop-kit-link'
            href='https://hismileteeth.com/products/teeth-whitening-kit'
          >
            Shop the Kit
          </a>
          <a
            className='explore-range-link'
            href='https://hismileteeth.com/pages/products'
          >
            Explore the Range
          </a>
          {/* <a className='cart-link' href='https://hismileteeth.com/cart'>
            My Cart
          </a> */}
        </div>

        <button
          onClick={() => setShowLinks(!showLinks)}
          className='burger-button'
        >
          {/* Open */}
          <BurgerButton />
          {/* className="burger-button-component" id={showLinks ? ".change" : ""} */}
        </button>
      </div>

      <h1 className={isPageDesktop ? "nav-title-desktop" : "nav-title-mobile"}>Hismile</h1>

      <div className='rightSide'>
        <div className='links'>
          <a href='https://hismileteeth.com/cart'>My Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
