import React from "react";
import ProductList from "../../components/ProductList";
import { motion as m } from "framer-motion";
import ProductFilters from "../../components/ProductFilters";
import { useLocation, useParams } from "react-router-dom";
import { useGetProductsByUrlQuery } from "../../features/products/productsSlice";
import SkeletonCard from "../../components/Skeleton/SkeletenCard";

const ProductsPage = () => {
  const { category } = useParams();
  const { pathname, search } = useLocation();
  const {
    data: products,
    isLoading,
    isSuccess,
  } = useGetProductsByUrlQuery(`${pathname + search}`);

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="container flex flex-col gap-4 pt-4 pb-6 w-full ms-auto"
    >
      <h2 className="text-2xl font-bold">{category}</h2>
      <ProductFilters />
      {isLoading && <SkeletonCard cardNumbers={8} />}
      {isSuccess && <ProductList products={products} />}
    </m.section>
  );
};

export default ProductsPage;
