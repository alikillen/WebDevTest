import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // fix navbar onclick!!!
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Home
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className='nav-item'>
              <a
                href='https://hismileteeth.com/products/teeth-whitening-kit'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop the kit
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://hismileteeth.com/pages/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Explore the range
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://hismileteeth.com/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
