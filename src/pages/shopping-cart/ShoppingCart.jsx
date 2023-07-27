import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { ProductList } from "../../data";
import CartItem from "../../components/CartItem";
import { Navigate, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, setCartItems, getTotalAmountCart } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalAmountCart();
  return (
    <div className="cart">
      {ProductList.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem key={product.id} data={product} />;
        }
      })}
      <div>
        <h4>Total: ${totalAmount}</h4>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button> Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
