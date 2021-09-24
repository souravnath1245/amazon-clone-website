import React, { useState } from "react";
import Product from "../products/product";
import "./Main.css";

const Main = () => {
  const [items, setItems] = useState([]);
  fetch("./products.JSON")
    .then((res) => res.json())
    .then((data) => setItems(data));
  return <div>
      {items.map(product => <Product key={product.key} product={product}/>)}
  </div>;
};

export default Main;
