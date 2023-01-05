import { useTheme } from 'next-themes'
import React, { useCallback, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import {BsChevronDown} from "react-icons/bs"
const HeaderItem=[
  {
    id:1,
    name:"Home",

  },
  {
    id:2,
    name:"Games",
    icon:true,
    
  },
  {
    id:3,
    name:"Play",
    
  },
  {
    id:4,
    name:"More",
    icon:true
    
  },
  
]
const Header = () => {
  const [mode,setMode]=useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const ModeChange=useCallback(()=>{
    setMode(!mode)
    setTheme(theme === 'light' ? 'dark' : 'light')
  },[mode,theme])
  
  return (
    <div
    className=' flex justify-center items-center   h-14 bg-[#1C1B22]'
    >
    <div>

    </div>
    <div className='flex items-center justify-center' >
    {
      HeaderItem.map((item,index)=>{
      return(
        <div key={index}>
          <div className='flex items-center cursor-pointer'>
          <p className='text-white pl-9 font-serif font-medium'>{item.name}</p>
          {
            item.icon?
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            :null
          }
          </div>
        </div>
      )
      })
    }
    </div>
    <div>

    </div>
    </div>
    
  )
}

export default Header