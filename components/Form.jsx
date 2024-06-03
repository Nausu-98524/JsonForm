'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [elements, setElements] = useState([]);
  const [editElement, setEditElement] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem('formElements'));
    if (storedElements) {
      setElements(storedElements);
    }
  }, []);

  const handleEdit = (elementId) => {
    setEditElement(elementId);
  };

  const handleSaveEdit = (elementId, newValue) => {
    setElements(elements.map(element => 
      element.id === elementId ? { ...element, label: newValue } : element
    ));
    setEditElement(null);
  };


  const addElement = (type) => {
    let newElement = {};
    if (type === 'input') {
      const label = prompt('Enter the label for the input field:');
      const placeholder = prompt('Enter the placeholder for the input field:');
      if (label && placeholder) {
        newElement = { id: elements.length + 1, type, label, placeholder, value: '' };
      }
    } else if (type === 'select') {
      const label = prompt('Enter the label for the select field:');
      const optionCount = parseInt(prompt('How many options do you want to add?'), 10);
      if (label && !isNaN(optionCount)) {
        const options = [];
        for (let i = 0; i < optionCount; i++) {
          const option = prompt(`Enter option ${i + 1}:`);
          if (option) {
            options.push(option);
          } else {
            alert("Option cannot be empty");
            return;
          }
        }
        newElement = { id: elements.length + 1, type, label, options, value: '' };
      }
    } else if (type === 'button') {
      const buttonText = prompt('Enter the text for the button:');
      const buttonColor = prompt('Enter the color for the button:');
      if (buttonText && buttonColor) {
        newElement = { id: elements.length + 1, type, buttonText, buttonColor };
      }
    } else if (type === 'time') {
      const label = prompt('Enter the label for the time field:');
      if (label) {
        newElement = { id: elements.length + 1, type, label, value: '' };
      }
    }
    if (newElement.type) {
      setElements([...elements, newElement]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formElements', JSON.stringify(elements));
    router.push('/previewForm');
  };

  return (
    <div className="flex">
      <div className="w-52 shadow-lg h-screen p-4">
        <h3 className="text-2xl font-bold text-center">Components</h3>
        <hr />
        <div className="flex flex-col space-y-2">
          <button onClick={() => addElement('input')} className="bg-blue-500 text-white px-6 rounded-md py-1 text-xl">Input +</button>
          <button onClick={() => addElement('time')} className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Time +</button>
          <button onClick={() => addElement('select')} className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Option +</button>
          <button onClick={() => addElement('button')} className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Button +</button>
        </div>
      </div>

      <div className="flex items-center justify-center p-12 w-full">
        <div className="mx-auto w-full max-w-[750px] bg-white">
          <form onSubmit={handleSubmit}>
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
            <div>
              <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Save Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
