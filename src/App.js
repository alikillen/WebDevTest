import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";

import "./App.css";
import JSChallenges from "./components/JSChallenges";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Route path='/Questions' exact component={Questions} />
        <Route path='/JSChallenges' exact component={JSChallenges} />
      </Router>
    </>
  );
}

export default App;
