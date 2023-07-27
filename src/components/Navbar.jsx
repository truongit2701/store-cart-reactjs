import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo">
          shop
        </Link>
        <Link to="/cart" className="cart-icon">
          cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
