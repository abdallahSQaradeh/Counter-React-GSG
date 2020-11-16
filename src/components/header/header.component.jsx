import React from "react";
import "./header.style.css";
//import {ReactComponent as Cart} from "../../assets/shopping-cart-solid.svg"
import Cart from "../../assets/shopping-cart-solid.svg";
const header = (props) => {
  return (
    <div className="header">
      <div className="header-items">
        <img src={Cart} alt="cart" width="15px" />
        <span className="result">{props.items}</span>
        <sup className="items">items</sup>
      </div>
    </div>
  );
};
export default header;
