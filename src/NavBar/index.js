import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav, Form, NavItem, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cart from "./shopping-cart.svg";

const NavBar = () => {
  return (
    <Navbar className="navStyle">
      {/* <Navbar.Brand to="/home">Navbar</Navbar.Brand> */}
      <Nav className="mr-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shoppingcart">
          <img src={cart} alt="cart" width="30px" className="mr-sm-2" />
        </NavLink>

        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  );
};

export default NavBar;
