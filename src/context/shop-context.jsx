import { createContext, useState } from "react";
import { ProductList } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ProductList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmountCart = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let cartInfo = ProductList.find((p) => p.id === Number(item));
        totalAmount += cartInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const updateCartItemsAmount = (newAmount, itemId) => {
    console.log(newAmount, itemId);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const data = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsAmount,
    getTotalAmountCart,
  };

  return (
    <ShopContext.Provider value={data}>{props.children}</ShopContext.Provider>
  );
};
