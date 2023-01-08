import React from 'react'

const Input = ({label,placeholder,type}:any) => {
  return (
    <div className='flex flex-col mb-3'>
      <label className='text-white font-medium font-serif pl-1'>
      {label}
      </label>
      <input className='outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input