import { useTheme } from 'next-themes'
import React, { useCallback, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import {BsChevronDown} from "react-icons/bs"
import GameBox from './GameBox'
import InfoBox from './InfoBox'

const Header = () => {
  const [openGame,setGame]=useState<boolean>(false)
  const [openInfo,setOpenInfo]=useState<boolean>(false)

  const OpenGameBox=useCallback(()=>{
      setGame(!openGame)
  },[openGame])
  const OpenMoreBox=useCallback(()=>{
    setOpenInfo(!openInfo)
},[openInfo])


  
  return (
    <div
    className=' flex  items-center justify-between   h-14 bg-[#1C1B22]'
    >
    <div>
    </div>
    <div className='flex items-center justify-center ml-10' >
  
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Home</p>
      <div className='flex items-center cursor-pointer relative' onClick={OpenGameBox}>
          <p className='text-white pl-9 font-serif font-medium'>Games</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openGame?<GameBox/>:null
            }
          </div>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Play</p>
      <div className='flex items-center cursor-pointer relative'>
          <p className='text-white pl-9 font-serif font-medium' onClick={OpenMoreBox}>More</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openInfo?<InfoBox/>:null
            }
          </div>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>News</p>



    </div>
    <div className='flex items-center mr-10'>
        <p className=' text-[#B6FF40] mr-10 font-serif cursor-pointer font-xl'>Login</p>
      <div className='h-10 w-20 flex items-center justify-center rounded-md cursor-pointer bg-[#B6FF40]'>
        <p className=' font-serif font-xl'>Signup</p>
      </div>
    </div>
    </div>
    
  )
}

export default Header