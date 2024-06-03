import React from "react";

const Select = ({ label, value, onChange, options = [] }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="options"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <select
        value={value}
        id="options"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      >
        <option value="option1">Select</option>
        {options && options.length
          ? options.map((item) => (
              <option id={item.id} key={item.id} value={item.id}>
                {item.label}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default Select;
