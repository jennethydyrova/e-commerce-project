import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import addToCart from "../addToCart/index";

// eslint-disable-next-line
const Product = (props) => {
  const [likeCount, setCount] = React.useState(0);
  const [productQuantity, setQuantityCount] = React.useState(props.quantity);

  const addToCart = () => {
    return (
      <addToCart
        name={props.name}
        description={props.description}
        price={props.price}
      />
    );

    setQuantityCount(productQuantity - 1);
  };

  return (
    <Col class="align-items-stretch" lg={{ span: 4 }}>
      <Card style={{ width: "22rem" }}>
        <Card.Img
          src={props.img}
          width="10rem"
          variant="top"
          alt="product img"
        />

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
          <div>
            <p>{likeCount}</p>
            <Button variant="primary" onClick={() => setCount(likeCount + 1)}>
              Like
            </Button>
          </div>

          <p>{productQuantity}</p>
          <Button variant="primary" onClick={() => addToCart()}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Product;
