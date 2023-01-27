import Image from 'next/image'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GameList } from './Sidebar'
const AddGameList = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
      <div className='w-[150px] h-8 relative ml-2'>
        <Image
        src={"/../public/logo2.png"}
        alt=""
        fill
        className="object-fill cursor-pointer"
        />
       </div>
       <p className='text-white font-serif font-bold text-xl mr-2'>Add Games</p>
      </div>
      <div className='ml-5 mt-5 absolute bottom-10 left-0 right-0'>
        {
          GameList.map((item,index)=>{
            return(
              <div key={index} className="h-12 w-[94%] relative flex items-center pl-2 rounded-sm cursor-pointer bg-[#F26D59] mt-4">
              <div className='relative w-8 h-8  '>
              <Image
              src={item.img}
              alt={item?.name.charAt(0)}
              fill
              className="rounded-sm object-cover cursor-pointer"
              />
              </div>
              <p className='text-white font-serif font-medium text-md ml-3 italic'>{item.name}</p>
              <AiOutlinePlusCircle className='absolute right-3 ' size={27} color="white" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AddGameList