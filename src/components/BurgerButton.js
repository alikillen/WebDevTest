import React, { useState } from "react";
import "../styles/Navbar.css";
import "../App.css";

function BurgerButton() {
  const [goAnimate, setGoAnimate] = useState(false);

  const animate = goAnimate ? "change" : "";

  return (
    <div
      class={"burger-button-container " + animate}
      onClick={() => setGoAnimate(!goAnimate)}
    >
      <div class='bar1'></div>
      <div class='bar2'></div>
      <div class='bar3'></div>
    </div>
  );
}

export default BurgerButton;
