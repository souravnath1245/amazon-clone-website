import React from "react";
import "./product.css";

const Product = (props) => {
  const { name, seller, price, stock, img } = props.product;
  return (
    <div className="productSection ">
        <div className='row'>

      <div className="row justify-content-between align-item-center col-9 productDiv">
        <div className="col-3">
          <div className="image">
            <img className="img-fluid p-2" src={img} alt="" />
          </div>
        </div>
        <div className="col-8">
          <strong className="strongStyle ">{name}</strong>
          <div className="row justify-content-around">
            <div className="col-5 my-4">
              <p>by :{seller}</p>
              <p>Product Price : {price}</p>
              <p>only {stock} left in stock - order soon</p>
            <a className="btn btn-primary btn-sm button"><i class="fas fa-shopping-cart"></i> add to Cart</a>

            </div>
            <div className="col-5">

            </div>
          </div>
        </div>
      </div>
       <div className='col-4'></div> 
        </div>
    </div>
  );
};

export default Product;
