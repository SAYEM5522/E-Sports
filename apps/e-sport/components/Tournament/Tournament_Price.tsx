import React from 'react'
import {BsFillTrophyFill} from "react-icons/bs"
const Tournament_Price = () => {
  return (
    <div>
      <p className='font-serif font-bold text-lg text-center border-b border-[rgba(0,0,0,0.4)] text-white py-3'>Tournament Price</p>
      <table className="table-auto w-full">
  <thead>
    <tr>
      <th className="px-4 text-white  border-b border-[rgba(0,0,0,0.4)] text-lg font-serif font-medium py-2">Place</th>
      <th className="px-4 text-white text-lg  border-b border-[rgba(0,0,0,0.4)] font-serif font-medium py-2">Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-14 border-b border-[rgba(0,0,0,0.4)]  py-2">
        <div className='flex items-center'>
        <BsFillTrophyFill size={23} color="#E8C159" className='mr-2'/>
        <p className=' text-white text-lg font-serif font-medium'>1st</p>
        </div>
    
        </td>
      <td className="px-14 text-white text-lg border-b border-[rgba(0,0,0,0.4)] font-serif font-medium py-2">$10</td>
    </tr>
    <tr>
    <td className="px-14 border-b border-[rgba(0,0,0,0.4)]  py-2">
        <div className='flex items-center'>
        <BsFillTrophyFill size={23} color="#9D9D9D" className='mr-2'/>
        <p className=' text-white text-lg font-serif font-medium'>2nd</p>
        </div>
    
        </td>
      <td className="px-14 text-white text-lg border-b border-[rgba(0,0,0,0.4)] font-serif font-medium py-2">$5</td>
    </tr>
    <tr>
    <td className="px-14   py-2">
        <div className='flex items-center'>
        <BsFillTrophyFill size={23} color="#C68A67" className='mr-2'/>
        <p className=' text-white text-lg font-serif font-medium'>3rd-4th</p>
        </div>
    
        </td>
      <td className="px-14 text-white text-lg font-serif font-medium py-2">$2.5</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Tournament_Price