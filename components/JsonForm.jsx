import React from "react";
import { productFormControls } from "../utils/Config";
import { InputField } from "./FormControls/InputField";
import Select from "./FormControls/Select";

const JsonForm = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[750px] bg-white">
          <form>
            {productFormControls && productFormControls.length
              ? productFormControls.map((item) =>
                  item.componentType === "input" ? (
                    <InputField
                      type={item.type}
                      placeholder={item.placeholder}
                      label={item.label}
                      value={productFormControls && productFormControls[item.id]}
                    />
                  ) : item.componentType === "select" ? (
                    <Select
                      value={productFormControls && productFormControls[item.id]}
                      label={item.label}
                      options={item.options}
                    />
                  ) : null
                )
              : null}
            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JsonForm;
