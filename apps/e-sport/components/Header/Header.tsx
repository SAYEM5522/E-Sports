import { useTheme } from 'next-themes'
import React, { useCallback, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
const Header = () => {
  const [mode,setMode]=useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const ModeChange=useCallback(()=>{
    setMode(!mode)
    setTheme(theme === 'light' ? 'dark' : 'light')
  },[mode,theme])
  return (
    <div
    className='flex-1 w-full border-b h-14 bg-[#1C1B22]'
    >
      
      {/* <div onClick={ModeChange}>
      {
        mode?
        <HiOutlineMoon size={25} className="mr-9 cursor-pointer"/>:
        <BsSun  size={25} className="mr-9 cursor-pointer"/>

      }
      </div> */}
    </div>
    
  )
}

export default Header