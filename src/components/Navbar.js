import React, { useState } from 'react'
import BurgerButton from "../components/BurgerButton"
import "../App.css"
import "../styles/Navbar.css"

// import button


function Navbar() {



  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='Navbar'>
      <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden" : ""}>
          <a href='/'>Home</a>
          <a href='https://hismileteeth.com/products/teeth-whitening-kit'>
            Shop the Kit
          </a>
          <a href='https://hismileteeth.com/pages/products'>
            Explore the Range
          </a>
          <a href='https://hismileteeth.com/cart'>My Cart</a>
        </div>
        <button onClick={()=> setShowLinks(!showLinks)}>
        {/* Open */}

        {/* {" "} */}
        <BurgerButton />
        </button>
      </div>

      {/* <div className="rightSide"> */}
        {/* button here when mobile */}
      {/* </div> */}
    </div>
  );
}

export default Navbar
