import React from "react";

export const InputField = ({ label, placeholder, value, type }) => {
  return (
    <div className="mb-5">
      <label
        for="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <input
        value={value}
        type={type || "text"}
        id="name"
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
  );
};
