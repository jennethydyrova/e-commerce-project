import React from "react";
// eslint-disable-next-line
const Product = (props) => {
  const [likeCount, setCount] = React.useState(0);
  const [productQuantity, setQuantityCount] = React.useState(props.quantity);

  return (
    <>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <img src={props.img} alt="product img" />
      </div>
      <div>
        <p>{likeCount}</p>
        <button onClick={() => setCount(likeCount + 1)}>Like</button>
      </div>
      <div>
        <p>{productQuantity}</p>
        <button onClick={() => setQuantityCount(productQuantity - 1)}>
          Add to cart
        </button>
      </div>
    </>
  );
};
export default Product;
