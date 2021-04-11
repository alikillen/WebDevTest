import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      {isPageMobile ? (
        <button
          onClick={() => setShowLinks(!showLinks)}
          className='burger-button'
        >
          <BurgerButton />
        </button>
      ) : (
        ""
      )}

      <Link
        to='/'
        className={isPageDesktop ? "nav-title-desktop" : "nav-title-mobile"}
      >
        <h1>Hismile</h1>
      </Link>

      <div className='leftSide'>
        <div
          className={isPageDesktop ? "links-desktop" : "links"}
          id={showLinks ? "buttonlinks" : ""}
        >
          <a
            className={
              isPageMobile && !showLinks ? "hide-shop-kit-link" : "links"
            }
            href='https://hismileteeth.com/products/teeth-whitening-kit'
          >
            Shop the Kit
          </a>
          <a
            className={
              isPageMobile && !showLinks ? "hide-explore-range-link" : "links"
            }
            href='https://hismileteeth.com/pages/products'
          >
            Explore the Range
          </a>
        </div>
      </div>

      <div className='rightSide'>
        <div className='links'>
          <a href='https://hismileteeth.com/cart'>My Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
