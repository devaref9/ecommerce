import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [phone, setPhone] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
  };

  return (
    <main className="bg-[url('assets/images/texture.svg')]">
      <div className="container px-8 h-screen flex justify-center items-center">
        <div className="px-5 max-w-md border-[1px] bg-[#fdfdfd] shadow-md border-gray-300 rounded-default h-80 py-8 w-full">
          <div className="flex flex-col gap-3 items-center mb-4">
            <img className="w-32" src={Logo} alt="بنیکس" />
            <h3 className="text-xl font-bold">ورود یا عضویت</h3>
          </div>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">شماره موبایل</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="font-kalamehNum px-4 pt-3 pb-2 text-left border-[1px] rounded-default border-gray-300 outline-secondary"
                type="text"
                placeholder="مثال:  09123456789"
              />
            </div>
            <button className="btn bg-secondary text-white py-2">
              مرحله بعد
            </button>
          </form>
          <Link to={"/"} className="block mt-2 text-sm text-secondary">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
