import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import MenuList from './MenuList'
const MainPageHeader = () => {
     const [email,setEmail]=useState<string>()
     const [openProfile,setOpenProfile]=useState(false)
     const OpenMenu=useCallback(()=>{
        setOpenProfile(!openProfile)
     },[openProfile])

     useEffect(()=>{
      const currentEmail=Cookies.get("email")
        if(currentEmail!==email){
          setEmail(currentEmail)
        }
     },[email])
     
  return (
    <div  className=' flex  items-center justify-between    h-14 bg-[#1C1B22]'>
      <div>
       <div className='w-[170px] h-9 relative ml-8'>
        <Image
        src={"/../public/logo2.png"}
        alt=""
        fill
        className="object-fill cursor-pointer"
        />
       </div>
      </div>
      <div className='flex items-center justify-center ml-10' >
    <Link href={"/MainPage"}>
    <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Home</p>

    </Link>
      <div className='flex items-center cursor-pointer relative' >
          <p className='text-white pl-9 font-serif font-medium'>Games</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {/* {
              openGame?<GameBox/>:null
            } */}
          </div>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Play</p>
      <div className='flex items-center cursor-pointer relative'>
          <p className='text-white pl-9 font-serif font-medium' >More</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {/* {
              openInfo?<InfoBox/>:null
            } */}
          </div>
          <Link href={"/News"}>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>News</p>
          </Link>

    </div>
      <div>
        <div onClick={OpenMenu} className='flex items-center pr-16 relative cursor-pointer'>
          <div className='flex items-center '>
          <p className='text-white  font-serif text-sm ml-3 mr-1'>{email}</p>
           <BsChevronDown size={17} color="white"/>
          </div>

          {
            openProfile?<MenuList/>:null
          }
        </div>
        
      </div>
    </div>
  )
}

export default MainPageHeader