import React from "react";
import Products  from "./products";
import NavBar from "./NavBar";
import Page from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Page />
      <Products />
    </div>
  );
}

export default App;
