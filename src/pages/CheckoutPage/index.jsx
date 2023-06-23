import React from "react";
import { IoTrashBin, IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  increamentItemQty,
  decreamentItemQty,
  removeItemFromCart,
} from "../../app/cartSilce";
import commaNumber from "../../utils/commaNumber";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleIncrementQty = (product) => {
    dispatch(increamentItemQty(product));
  };
  const handleDecrementQty = (product) => {
    dispatch(decreamentItemQty(product));
  };
  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product));
  };

  return (
    <main className="py-4">
      <div className="container flex flex-col gap-4">
        <h2 className="text-2xl font-bold">سبد خرید</h2>
        {cart.length === 0 && (
          <div className="py-1 px-3 border-2 border-red-300 rounded-default bg-red-200">
            <p className="text-sm text-red-500">سبد خرید خالی است</p>
          </div>
        )}
        {cart.length > 0 && (
          <div>
            <table className="table-auto w-full text-center">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="w-[40%]">محصول</th>
                  <th className="w-[15%]">قیمت</th>
                  <th className="w-[15%]">تعداد</th>
                  <th className="w-[15%]">جمع قیمت</th>
                  <th className="w-[15%]">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((product) => {
                    return (
                      <tr key={product.id} className="border-b border-gray-300">
                        <td className="py-3 flex justify-start">
                          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                            <div className="h-16 w-16 lg:h-20 lg:w-20 overflow-hidden">
                              <img
                                loading="lazy"
                                className="object-fill"
                                src={product?.image}
                                alt="محصول"
                              />
                            </div>
                            <h3 className="max-w-[350px] text-right text-sm">
                              {product?.title}
                            </h3>
                          </div>
                        </td>
                        <td className="font-kalamehNum">
                          {commaNumber(Math.floor(product.price) * 50000)}
                        </td>
                        <td className="font-kalamehNum">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => {
                                handleIncrementQty(product);
                              }}
                            >
                              <IoAddCircle className="text-green-500 text-2xl" />
                            </button>
                            <span className="flex items-center justify-center w-8 h-8 border border-primary rounded-full">
                              {product?.qty}
                            </span>
                            <button
                              onClick={() => {
                                handleDecrementQty(product);
                              }}
                            >
                              <IoRemoveCircle className="text-red-500 text-2xl" />
                            </button>
                          </div>
                        </td>
                        <td className="font-kalamehNum">
                          {commaNumber(
                            Math.floor(product.price) * 50000 * product.qty
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              handleRemoveItem(product);
                            }}
                          >
                            <IoTrashBin className="text-red-600 text-2xl" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
