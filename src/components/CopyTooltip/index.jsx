import React, { useState } from "react";

const CopyTooltip = ({ Icon, title }) => {
  const [message, setMessage] = useState("کپی کردن");
  const handleCopyContent = async () => {
    try {
      await navigator.clipboard.writeText(title);
      setMessage("کپی شد!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    } finally {
      setTimeout(() => {
        setMessage("کپی کردن");
      }, 1000);
    }
  };
  return (
    <div onClick={handleCopyContent} className="group relative flex">
      <div className="flex items-center gap-2 group cursor-pointer">
        <Icon className="text-xl" />
        <p className="relative">
          <span>{title}</span>
          <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-orange-300 group-hover:w-full group-hover:transition-all group-hover:duration-300 duration-300"></span>
        </p>
      </div>
      <span className="absolute top-10 scale-0 transition-all rounded bg-slate-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default CopyTooltip;
