import Card from "react-bootstrap/Card";
import { Button, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

const SingleProduct = () => {
  //const [productInfo, setProductInfo] = React.useState([]);

  let { id } = useParams();
  

  // const fetchData = async () => {
  //   const res = await db.collection("products").get();
  //   const data = res.docs;

  //   // for (let i = 0; i < data.length; i++) {
  //   //   setProductInfo((prevState) => [...prevState, data[i].data()]);
  //   //   console.log(data[i].data());
  //   // }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //console.log(props);
  return (
    <p>hello id: {id}</p>
    // <Col class="align-items-stretch" lg={{ span: 4 }}>
    //   <Card style={{ width: "22rem" }}>
    //     {/* <Card.Img
    //       src={props.img}
    //       width="10rem"
    //       variant="top"
    //       alt="product img"
    //     /> */}
    //     <Card.Body>
    //       <Card.Title>{props.name}</Card.Title>
    //       <Card.Text>{props.description}</Card.Text>
    //       <Card.Text>{props.price}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

export default SingleProduct;
