import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const ProductItem = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, name, price, productImage } = props.data;
  const cartItemAmount = cartItems[id];
  return (
    <div className="product-item">
      <img src={productImage} />
      <p className="product-name">{name}</p>
      <p>${price}</p>
      <button className="add-cart-btn" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default ProductItem;
