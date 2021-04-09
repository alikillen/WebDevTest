import React from 'react'
import "../styles/Navbar.css"
import "../App.css"



function BurgerButton() {

    function toggleAnimation(x) {
      x.classList.toggle("change");
    }

  return (
    <div class='burger-button-container' onclick="toggleAnimation(this)">
      <div class='bar1'></div>
      <div class='bar2'></div>
      <div class='bar3'></div>
    </div>
  );
}

export default BurgerButton
