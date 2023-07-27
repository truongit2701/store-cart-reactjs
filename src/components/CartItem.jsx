import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { id, productImage, name, price } = props.data;
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItemsAmount,
  } = useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={productImage} />
      </div>
      <div className="cart-info">
        <h3>{name}</h3>
        <p>${price}</p>
        <div className="cart-btns">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="text"
            onChange={(e) => updateCartItemsAmount(Number(e.target.value), id)}
            value={cartItems[id]}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
