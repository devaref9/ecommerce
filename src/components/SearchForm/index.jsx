import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";

const SearchForm = ({ className }) => {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {}, [searchKey, dispatch]);
  return (
    <form className={`${className} w-full lg:max-w-sm`}>
      <div className="relative">
        <BiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-secondary left-3" />
        <input
          onChange={handleChange}
          type="text"
          placeholder="جستجوی محصول ..."
          className="w-full py-2.5 pe-12 ps-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-secondary focus:text-slate-700"
        />
      </div>
    </form>
  );
};

export default SearchForm;
