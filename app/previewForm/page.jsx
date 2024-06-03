'use client'
import React, { useEffect, useState } from 'react';

const PreviewForm = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem('formElements'));
    if (storedElements) {
      setElements(storedElements);
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-12 w-full">
      <div className="mx-auto w-full max-w-[750px] bg-white">
        <form>
          {elements.map(element => (
            <div className="mb-5" key={element.id}>
              {element.type === 'input' && (
                <>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">{element.label}</label>
                  <input
                    type="text"
                    placeholder={element.placeholder}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </>
              )}
              {element.type === 'select' && (
                <>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">{element.label}</label>
                  <select
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    {element.options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </>
              )}
              {element.type === 'button' && (
                <button
                  className={`w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none ${element.buttonColor}`}
                  style={{ backgroundColor: element.buttonColor }}
                >
                  {element.buttonText}
                </button>
              )}
              {element.type === 'time' && (
                <>
                  <label className="mb-3 block text-base font-medium text-[#07074D]">{element.label}</label>
                  <input
                    type="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </>
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default PreviewForm;
