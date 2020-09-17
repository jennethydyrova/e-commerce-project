import React from "react";
import Product from "../product";

const products = [
  {
    name: "Shoe",
    description: "Comfy shoe",
    img: "shoe",
    quantity: 50,
  },
  {
    name: "Hat",
    description: "Comfy hat",
    img: "hat",
    quantity: 70,
  },
];

const Products = () => {
  return products.map((product) => (
    <Product
      name={product.name}
      description={product.description}
      img={product.img}
      quantity={product.quantity}
    />
  ));
};
export default Products;
