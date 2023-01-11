import { Avatar } from '@mui/material'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { selectUser } from '../../feature/userSlice'
const MainPageHeader = () => {
     const email=useSelector(selectUser)
     const OpenMenu=()=>{
      
     }
  return (
    <div className=' flex  items-center justify-between   h-14 bg-[#1C1B22]'>
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
        <div onClick={OpenMenu} className='flex items-center mr-16 cursor-pointer'>
          <Avatar
          src='https://epulze.com/static/build/unassigned.png'
          
          className='w-2 h-2 '
          />
          <p className='text-white font-serif capitalize text-sm ml-3'>{email}</p>
        </div>
        
      </div>
    </div>
  )
}

export default MainPageHeader