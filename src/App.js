import React from "react";

import NavBar from "./NavBar";
import Page from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage/index";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </div>
    </Router>
  );
}

export default App;
