import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, isItemInCart } from "../../app/cartSilce";
import { BiCartAdd } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import commaNumber from '../../utils/commaNumber'

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart.value);
  const [isAdded, setIsAdded] = useState(false);
  const { image, title, price } = product;
  const dispatch = useDispatch();
  const isProductExisted = useSelector((state) =>
    isItemInCart(state.cart.value, product.id)
  );

  useEffect(() => {
    setIsAdded(isProductExisted);
  }, [cart, isProductExisted]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
    setIsAdded(true);
  };

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-lg
      border-2 border-slate-300 bg-white shadow-xl hover:shadow-2xl hover:scale-105 duration-300 transform transition cursor-pointer"
    >
      <div className="flex flex-col px-4 py-5 gap-7">
        <div className="relative flex justify-center h-24 overflow-hidden rounded-xl">
          <img loading="lazy" className="object-cover" src={image} alt="product-img" />
        </div>
        <h5 className="overflow-hidden text-md text-left h-10 tracking-tight">
          {title}
        </h5>
        <div className="flex justify-between items-center">
          <p className="">
            <span className="font-kalamehNum font-bold">
            {commaNumber(Math.floor(price) * 50000)}
              <span className="text-xs ms-1">تومان</span>
            </span>
          </p>
          {isAdded ? (
            <button
              className="btn bg-green-500 py-1 shadow-sm shadow-green-100
               text-white transition-all"
            >
              <BsFillCartCheckFill className="text-xl" />
            </button>
          ) : (
            <button
              className="btn py-1 bg-primary text-center
                          text-white hover:bg-transparent
                          hover:text-primary border border-primary transition-all"
              onClick={handleAddToCart}
            >
              <BiCartAdd className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
