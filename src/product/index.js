import React from "react";

const product = [
  {
    name: "Shoe",
    description: "Comfy shoe",
    img: "shoe",
  },
  {
    name: "Hat",
    description: "Comfy hat",
    img: "hat",
  },
];

const Product = (props) => {
  return (
    <>
      <div>
        <h2>{props.name}</h2>
      </div>

      <button></button>
    </>
  );
};
export default Product;
