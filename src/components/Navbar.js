import React, { useState } from "react";
import BurgerButton from "../components/BurgerButton";
import { useMediaQuery } from "../helpers/MediaQueries";
import "../App.css";
import "../styles/Navbar.css";

function Navbar() {
  let isPageDesktop = useMediaQuery("(min-width: 880px)");
  let isPageMobile = useMediaQuery("(max-width: 880px)");

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div
          // className={isPageDesktop ? "links-desktop" : "links"}
          className='links'
          id={showLinks ? "buttonlinks" : ""}
        >
          {/* {isPageMobile && (
            <a className='home-link' href='/'>
              Home
            </a>
          )} */}
          <a
            className={
              isPageMobile && !showLinks
                ? "hide-shop-kit-link"
                : "shop-kit-link"
            }
            href='https://hismileteeth.com/products/teeth-whitening-kit'
          >
            Shop the Kit
          </a>
          <a
            className={
              isPageMobile && !showLinks
                ? "hide-explore-range-link"
                : "explore-range-link"
            }
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
          <BurgerButton />
        </button>
      </div>

      <h1 className={isPageDesktop ? "nav-title-desktop" : "nav-title-mobile"}>
        Hismile
      </h1>

      <div className='rightSide'>
        <div className='links'>
          <a href='https://hismileteeth.com/cart'>My Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
