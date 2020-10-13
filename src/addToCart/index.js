import React from "react";
import Product from "../product/index";
import { Button, Col, Card } from "react-bootstrap";

const AddToCart = (cartProducts) => {
  console.log(cartProducts);
  return (
    <Col class="align-items-stretch" lg={{ span: 4 }}>
      <Card style={{ width: "22rem" }}>
        <Card.Img
          src={cartProducts.img}
          width="10rem"
          variant="top"
          alt="product img"
        />
        <Card.Body>
          <Card.Title>{cartProducts.name}</Card.Title>
          <Card.Text>{cartProducts.description}</Card.Text>
          <Card.Text>{cartProducts.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default AddToCart;
