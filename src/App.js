import React from "react";
import Products  from "./products";
import NavBar from "./NavBar";
import Page from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBar />
      <Page />
      <Container>
        <Row xs={2} md={4} lg={5}>
          <Products />    
        </Row>
      </Container>
    </div>
  );
}

export default App;
