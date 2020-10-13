import React, { useState, useEffect } from "react";
import Product from "../product";
import db from "../firebaseConfig";

const Products = (setCartProducts) => {
  const [productInfo, setProductInfo] = React.useState([]);

  const fetchData = async () => {
    const res = await db.collection("products").get();
    const data = res.docs;
    for (let i = 0; i < data.length; i++) {
      setProductInfo((prevState) => [...prevState, data[i].data()]);
      // console.log(data[i].data());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return productInfo.map((product) => (
    <Product
      name={product.Name}
      description={product.Description}
      img={product.Image}
      quantity={product.Quantity}
      price={product.Price}
      setCartProducts={setCartProducts}
    />
  ));
};
export default Products;
