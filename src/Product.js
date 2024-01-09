import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, price, image, rating }) {
    const [{basket} ,dispatch]=useStateValue();
    // console.log("this is basket==>", basket)
    const addToBasket= () => {
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id:id,
          title:title,
          price:price,
          image:image,
          rating:rating,
        },
      });
       
    };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title} </p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_ , i) => (
              <p>⭐</p> 
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
