import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
    >
      {text}
    </button>
  );
};

export default Button;
