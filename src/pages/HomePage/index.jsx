import React from "react";
import Banner from "../../assets/images/banner-mobile.jpg";
import ProductList from "../../components/ProductList";
import {
  useGetProductsByLimitNumberQuery,
  useGetProductsQuery,
} from "../../features/products/productsSlice";
import SkeletenCard from "../../components/Skeleton/SkeletenCard";

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsByLimitNumberQuery(4);

  return (
    <main className="py-8 flex flex-col gap-8">
      <div className="container flex justify-center">
        <img
          loading="lazy"
          className="rounded-default w-full"
          src={Banner}
          alt="بنر"
        />
      </div>
      <div className="container flex flex-col gap-2">
        <h2 className="font-bold text-2xl">جدیدترین محصولات</h2>
        {isLoading && <SkeletenCard cardNumbers={4} />}
        {isSuccess && <ProductList products={products} />}
      </div>
    </main>
  );
};

export default HomePage;
