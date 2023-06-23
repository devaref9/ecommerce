import React from "react";
import ProductCard from "../ProductCard";
import "react-loading-skeleton/dist/skeleton.css";

const ProductList = ({ products }) => {
  const ProductsContent = (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );

  let content = <></>;

  if (products && products.length > 0) {
    content = ProductsContent;
  }

  return <div className="mt-4">{content}</div>;
};

export default ProductList;
