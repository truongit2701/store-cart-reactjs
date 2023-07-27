import React from "react";
import ProductItem from "../../components/ProductItem";
import { ProductList } from "../../data";
const Shop = () => {
  return (
    <div>
      <div className="product-list">
        {ProductList.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
