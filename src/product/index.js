import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

// eslint-disable-next-line
const Product = (props) => {
  const [likeCount, setCount] = React.useState(0);
  const [productQuantity, setQuantityCount] = React.useState(props.quantity);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src={props.img}
          width="200px"
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
          <Button
            variant="primary"
            onClick={() => setQuantityCount(productQuantity - 1)}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Product;
