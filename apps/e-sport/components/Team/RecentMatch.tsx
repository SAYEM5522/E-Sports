import React from 'react'

const RecentMatch = () => {
  return (
    <div>
      <table  className="border-collapse w-full bg-[#222225] ">
  <thead>
    <tr className='h-14 '>
      <th className=" text-white font-serif font-medium text-md italic ">Game</th>
      <th className="  text-white font-serif font-medium text-md italic">Mode</th>
      <th className="  text-white font-serif font-medium text-md italic">Fee</th>
      <th className="  text-white font-serif font-medium text-md italic">Server Region</th>
      <th className="  text-white font-serif font-medium text-md italic">Date</th>


    </tr>
  </thead>
  <tbody>
    
      <tr  className='h-20 bg-[#1C1B22] hover:bg-[#20395F] rounded-2xl border-b border-b-[#081325] '>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>
        <div className='flex items-center'>
         
          <p className='pl-3'>item.Teamname</p>
        </div>
      </td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>Free to entry</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>Bangladesh</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>Asia</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>2022-01-01</td>

        </tr>
       
    
  </tbody>
</table>
    </div>
  )
}

export default RecentMatch