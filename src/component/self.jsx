import React from "react";
import "./self.css";

const Self = (props) => {
  const { name, email, eyeColor, _id, age, address, about, gender } =
    props.data;
  const  handlePurchase = (id) => {
    console.log(id);
  };
  return (
    <div
      className=""
      style={{
        background: "2px solid blue",
        margin: "20px",
        padding: "10px",
        backgroundColor: "lightcyan",
      }}
    >
      <h3>Person Name : {name}</h3>
      <h4>Person Gender : {gender}</h4>
      <h5>Person Email : {email}</h5>
      <h6>
        Personal Detail : {age} {eyeColor}
      </h6>
      <p>{address}</p>
      <p>{about}</p>
      <button onClick={() => handlePurchase(_id)} className="btn-primary">
        purchase
      </button>
    </div>
  );
};

export default Self;
