
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
const Header = () => {

     
  return (
    <div  className=' flex  items-center justify-between border-b-gray-300 border-b    h-14 '>
      <div>
        <Link href="/">
       <div className='w-[170px] h-9 relative ml-8'>
        <Image
        src={"/../public/logo2.png"}
        alt=""
        fill
        className="object-fill cursor-pointer"
        />
       </div>
       </Link>

      </div>
      <div className='flex items-center justify-center ml-10' >
    <Link href={"/MainPage"}>
    <p  className='text-black pl-9 font-serif font-medium cursor-pointer'>Home</p>

    </Link>
      <div className='flex items-center cursor-pointer relative' >
          <p className='text-black pl-9 font-serif font-medium'>Games</p>
         
          </div>
      <p  className='text-black pl-9 font-serif font-medium cursor-pointer'>Play</p>
      <div className='flex items-center cursor-pointer relative'>
          <p className='text-black pl-9 font-serif font-medium' >More</p>
          
          </div>
          <Link href={"/News"}>
      <p  className='text-black pl-9 font-serif font-medium cursor-pointer'>News</p>
          </Link>

    </div>
      <div>
        <div  className='flex items-center pr-16 relative cursor-pointer'>
          <div className='flex items-center '>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Header