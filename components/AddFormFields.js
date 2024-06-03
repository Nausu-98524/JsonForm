import React from 'react'

const AddFormFields = () => {
  return (
    <div className="w-52 shadow-lg h-screen ">
        <h3 className="text-2xl font-bold text-center"> Components</h3>

        <hr />
        <div className="flex space-y-2 flex-col p-4">
            <button className="bg-blue-500 text-white px-6 rounded-md py-1 text-xl">Input +</button>
            <button className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Time +</button>
            <button className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Option +</button>
            <button className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Name +</button>
            <button className="bg-blue-500 text-white px-8 rounded-md py-1 text-xl">Button +</button>
           
        </div>
      </div>
  )
}

export default AddFormFields