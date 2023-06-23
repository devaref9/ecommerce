import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import SearchForm from "../SearchForm";
import { IoEnterOutline, IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.value);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(true);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="container">
        <div className=" flex flex-col gap-2.5 xl:flex-row">
          <Link to={"/"} className="flex justify-center items-center">
            <img className="h-8" src={Logo} alt="لوگو" />
          </Link>
          <SearchForm />
          <div className="grow hidden lg:block"></div>

          <div className="flex justify-center gap-2.5 items-center">
            <button className="rounded-default bg-transparent px-5 pt-1.5 pb-2 border-[#ebebeb] border-[1px] flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary transition duration-300">
              <IoEnterOutline className="text-2xl" />
              <Link to={"/auth"} className="font-bold">
                ورود | ثبت نام
              </Link>
            </button>
            <button className="btn bg-transparent pt-1.5 pb-2 border-[#ebebeb] hover:bg-primary hover:text-white hover:border-primary flex items-center gap-1 ">
              <IoCartOutline className="text-2xl" />
              <Link to={"/checkout"} className="font-bold">
                سبد خرید
              </Link>
              <span className="font-kalamehNum inline-flex items-center justify-center rounded-full bg-secondary text-white w-6 h-6 text-sm p-3 ">
                {cart.length}
              </span>
            </button>
          </div>
          <div className="flex justify-center mt-1 lg:hidden">
            <button
              onClick={handleOpenNav}
              className="btn bg-primary text-white py-2 font-bold"
            >
              دسته بندی محصولات
            </button>
          </div>
        </div>
        <div className="hidden mt-3 lg:flex gap-2">
          <span className="font-bold text-lg">دسته بندی محصولات | </span>
          <ul className="flex gap-4">
            <li className="hover:text-secondary transition">
              <Link to={"/products/category/women's clothing"}>پوشاک زنانه</Link>
            </li>
            <li className="hover:text-secondary transition">
              <Link to={"/products/category/men's clothing"}>پوشاک مردانه</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Modal */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } fixed  bg-primary bg-opacity-80 z-30 top-0 left-0 right-0 bottom-0 pt-8 pb-10`}
      >
        <div className="flex justify-center">
          <button
            onClick={handleCloseNav}
            className="btn bg-secondary text-white border-secondary "
          >
            بستن
          </button>
          <nav className="scrollbar--custom overflow-y-scroll fixed top-20 right-4 left-4 h-3/5 text-white flex flex-col gap-3">
            <div>
              <Link
                className="font-bold text-lg mb-1"
                to={"/products/category/women's clothing"}
              >
                پوشاک زنانه
              </Link>
              {/* 
                            <ul>
                <li>
                  <Link
                    to={"/"}
                    className="ps-4 relative before:absolute before:bg-white before:w-1.5 before:h-1.5 before:rounded-full before:right-0 before:top-1/2 before:-translate-y-1/2 before:content-['']"
                  >
                    اندامی
                  </Link>
                </li>
              </ul>
            */}
            </div>
            <div>
              <Link
                className="font-bold text-lg mb-1"
                to={"/products/category/men's clothing"}
              >
                پوشاک مردانه
              </Link>
              {/* 
                            <ul>
                <li>
                  <Link
                    to={"/"}
                    className="ps-4 relative before:absolute before:bg-white before:w-1.5 before:h-1.5 before:rounded-full before:right-0 before:top-1/2 before:-translate-y-1/2 before:content-['']"
                  >
                    اندامی
                  </Link>
                </li>
              </ul>
            */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
