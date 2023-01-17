import React from 'react'

const RecentMatch = () => {
  return (
    <div>
      <table  className="border-collapse w-full bg-[#222225] ">
  <thead>
    <tr className='h-14 '>
      <th className=" text-white font-serif font-medium text-md ">TEAM NAME</th>
      <th className="  text-white font-serif font-medium text-md">JOIN AT</th>
      <th className="  text-white font-serif font-medium text-md">COUNTRY</th>
      <th className="  text-white font-serif font-medium text-md">COUNTRY</th>
      <th className="  text-white font-serif font-medium text-md">COUNTRY</th>


    </tr>
  </thead>
  <tbody>
    
      <tr  className='h-20 bg-[#1C1B22] hover:bg-[#20395F] rounded-2xl border-b border-b-[#081325] '>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>
        <div className='flex items-center'>
         
          <p className='pl-3'>item.Teamname</p>
        </div>
      </td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>2022-01-01</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>Bangladesh</td>
        </tr>
       
    
  </tbody>
</table>
    </div>
  )
}

export default RecentMatch