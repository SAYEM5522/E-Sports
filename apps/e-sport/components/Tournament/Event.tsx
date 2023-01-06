import Image from 'next/image'
import React from 'react'
import { data } from '../../TournamentInfo'
const Event = () => {
  return (
    <div className=''>
      <p className='font-serif font-bold text-white text-2xl mb-1'>Recommended Events</p>
     <div className=' flex items-center flex-wrap '>

      {
        data.map((item,index)=>{
          return(
            // width length should change
            <div key={index} className="w-[30%] h-[22rem] bg-white mr-9 mt-3 mb-4 cursor-pointer rounded-lg  ">
              <div className='w-full h-[210px] relative'>
              <Image
              src={item.Banner}
              alt={item.GName.charAt(0)}
              className="rounded-t-lg hover:scale-[1.1]"
              fill
              />
              </div>
          
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Event