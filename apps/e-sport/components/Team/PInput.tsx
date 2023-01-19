import React from 'react'

const PInput = ({label,placeholder,type,register,errorMessage,id}:any) => {
  return (
    <div className={`flex mr-10 ml-10 w-[350px] flex-col ${errorMessage?'mb-[2px]':'mb-2'}`}>
      <label className='text-white font-medium font-serif pl-1'>
      {label}
      </label>
      <input  id={id} {...register} className={`outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black`} type={type} placeholder={placeholder} />
      <span className='font-serif text-[#FF0000] font-medium pl-1 pt-1'>{errorMessage}</span>
    </div>
  )
}

export default PInput