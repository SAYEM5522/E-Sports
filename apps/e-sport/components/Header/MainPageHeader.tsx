import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import React, { useCallback, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import MenuList from './MenuList'
const MainPageHeader = () => {
     const email=Cookies.get("email")
     const [openProfile,setOpenProfile]=useState(false)
     const OpenMenu=useCallback(()=>{
        setOpenProfile(!openProfile)
     },[openProfile])
  return (
    <div  className=' flex  items-center justify-between    h-14 bg-[#1C1B22]'>
      <div>

      </div>
      <div className='flex items-center justify-center ml-10' >

      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Home</p>
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
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>News</p>

    </div>
      <div>
        <div onClick={OpenMenu} className='flex items-center mr-16 relative cursor-pointer'>
          <Avatar
          src='https://epulze.com/static/build/unassigned.png'
          
          className='w-6 h-6 '
          />
          <p className='text-white font-serif text-sm ml-3'>{email}</p>
          {
            openProfile?<MenuList/>:null
          }
        </div>
        
      </div>
    </div>
  )
}

export default MainPageHeader