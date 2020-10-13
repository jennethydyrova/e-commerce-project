import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import addToCart from "../addToCart/index";
import { NavLink, useRouteMatch } from "react-router-dom";
import SingleProduct from "../singleProductPage/index.js";

// eslint-disable-next-line
const Product = (props) => {
 
  
  const [likeCount, setCount] = React.useState(0);
  const [productQuantity, setQuantityCount] = React.useState(props.quantity);
  //console.log(props.id);
  // const allprops = { props };
  const addToCart = () => {
    // console.log(props.setCartProducts);
    // props.setCartProducts({
    //   name: props.name,
    //   description: props.description,
    //   img: props.img,
    // });

    // <div>hello</div>
    setQuantityCount(productQuantity - 1);
  };
  // console.log(props.id);

  const handleClick = (e) => {
    // <Link to="/about"></Link>
    // <Link to="/product" />;
  };

  return (
    <Col class="align-items-stretch" lg={{ span: 4 }}>
      <Card style={{ width: "22rem" }}>
      <NavLink  to={`/${props.id}`}>
          <Card.Img
            src={props.img}
            width="10rem"
            variant="top"
            alt="product img"
            onClick={(e) => handleClick(e)}
          />
        </NavLink>
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
          <Button variant="primary" onClick={(e) => addToCart(e)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
      
      {/* <SingleProduct props={props.name} /> */}
    </Col>
  );


};
export default Product;
