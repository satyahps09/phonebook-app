import React from 'react'
import "../../App.css"
import { IoMdClose } from "react-icons/io";

function DetailsSection({handleSubmit, handleOnChange, handleClose, rest}) {
  return (
    <div className='fixed inset-0 bg-gray bg-opacity-30 backdrop-blur-sm'>
    <div className="addContainer w-96 bg-gray-300  p-10 rounded-md pt-6">
    <form className="flex flex-col gap-y-3">
      <button
        className="ml-auto text-xl border border-black border-1 rounded-xl"
        onClick={handleClose}
      >
        <IoMdClose/>
      </button>
      <label htmlFor="name">Name : </label>
      <input
        className="pl-2 p-1"
        type="text"
        id="name"
        name="name"
        onChange={handleOnChange}
        value={rest.name}
      />

      <label htmlFor="mobile">Mobile : </label>
      <input
        className="pl-2 p-1"
        type="number"
        id="mobile"
        name="mobile"
        onChange={handleOnChange}
        value={rest.mobile}
      />

      <button
        onClick={handleSubmit} // Move handleSubmit call here
        className="w-auto bg-blue-500 mt-5 p-1 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  </div> 
  </div>
  )
}

export default DetailsSection