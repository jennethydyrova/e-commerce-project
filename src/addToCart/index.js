import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

const AddToCart = () => {
  
//  const [productInfo, setProductInfo] = React.useState([]);

//   let { id } = useParams();
  
   
//   const fetchData = async () => {
//     const res = await db.collection("products").doc(id).get();
//     const data = res.data();
//    // console.log(data)
//    return setProductInfo(data)
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(productInfo.Quantity)
//   const [productQuantity, setQuantityCount] = useState(productInfo.Quantity);

  // const addToCart = () => {
  //  //console.log('hello')
  //  console.log(productQuantity - 1)
  //   setQuantityCount(productQuantity - 1);
  // };
 

  //console.log(productInfo);
  return (
    <p>hello</p>
    // <Col class="align-items-stretch" lg={{ span: 4 }}>
    //   <Card style={{ width: "22rem" }}>
    //     <Card.Img
    //       src={productInfo.Image}
    //       width="10rem"
    //       variant="top"
    //       alt="product img"
    //     />
    //     <Card.Body>
    //       <Card.Title>{productInfo.Name}</Card.Title>
    //       <Card.Text>{productInfo.Description}</Card.Text>
    //       <Card.Text>{productInfo.Price}</Card.Text>
    //       <p>{productQuantity}</p>
    //     </Card.Body>
    //     {/* <Button variant="primary" onClick={(e) => addToCart(e)
    //     }>
    //         Add to cart
    //       </Button> */}
    //   </Card>
    // </Col>
  );
};

export default AddToCart;
