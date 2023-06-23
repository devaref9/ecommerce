import React from "react";
import { Link } from "react-router-dom";

const ProductFilters = ({ className, query = "" }) => {
  return (
    <div className={`${className} flex gap-6 items-center`}>
      <strong>فیلتر قیمت:</strong>
      <div className="flex gap-4">
        <Link
          className="hover:text-secondary transition"
          to={`${query + "?sort=asc"} `}
        >
          بیشترین
        </Link>
        <Link
          className="hover:text-secondary transition"
          to={`${query + "?sort=desc"} `}
        >
          کمترین
        </Link>
      </div>
    </div>
  );
};

export default ProductFilters;
