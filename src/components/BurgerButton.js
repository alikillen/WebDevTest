import React, { useState } from 'react'
import "../styles/Navbar.css"
import "../App.css"



function BurgerButton() {
  const [goAnimate, setGoAnimate] = useState(false);

  // function toggleAnimation(x) {
  //   x.classList.toggle("change");
  // }

    // const toggleAnimation = () => {
    //   this.setState({
    //     goAnimate: !this.state.goAnimate
    //   })
    // }

  const animate = goAnimate ? "change" : "";

  

  return (
    <div
      class={'burger-button-container ' + animate}
      onClick={() => setGoAnimate(!goAnimate)}
      // id = "burger-button-container"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  );
}

export default BurgerButton

// class App extends Component {
//   state = { showMenu: false }

//   toggleMenu = () => {
//     this.setState({
//       showMenu: !this.state.showMenu
//     })
//   }

//   render() {
//     const menuVis = this.state.showMenu ? 'show' : 'hide';
//     return (
//       <div>
//         <div className={`menu ${menuVis}`}>
//           menu content here
//         </div>
//         <button onClick={this.toggleMenu}>Toggle</button>
//         regular content here
//       </div>
//     )
//   }
// }
