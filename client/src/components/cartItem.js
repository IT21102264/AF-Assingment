import "./cartItem.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const cartItem = (props) => {


  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src={"#"}
          style={{ width: "100px", height: "100px" }}
          alt={props.details.itemName}
        />
      </div>

      <p>Item Name</p>

      <p className="cartItem__price"> Rs. Price </p>

      <select className="cartItem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartItem__deleteBtn">
        <i>
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </button>
    </div>
  );
};
export default cartItem;
