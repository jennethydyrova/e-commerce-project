import React, { useState } from "react";
import NavBar from "./NavBar";
import Page from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./AboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage/index";
import AddToCart from "./addToCart/index";
import SingleProduct from "./singleProductPage/index";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <Router>
      <div>
        <NavBar />
        <Route
          exact
          path="/"
          component={MainPage}
          setCartProducts={setCartProducts}
        ></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route
          path="/shoppingcart"
          component={AddToCart}
          cartProducts={cartProducts}
        ></Route>
        <Switch>
          <Route path="/:id" children={SingleProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
