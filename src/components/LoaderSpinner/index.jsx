import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#273852"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
