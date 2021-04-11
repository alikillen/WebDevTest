import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";

import "./App.css";
import DadJokeGenPage from "./pages/DadJokeGenPage.js";
import QuestionsPage from "./pages/Questions.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Questions' exact component={QuestionsPage} />
          <Route path='/DadJokeGenPage' exact component={DadJokeGenPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
