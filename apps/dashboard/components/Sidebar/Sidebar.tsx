"use client";
import React, { useCallback, useMemo, useState } from 'react'
import {FiHome} from "react-icons/fi"

import IconItem from './IconItem'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'

const SideBarItem=[
  {
    id:1,
    name:"Event",
    icon:FiHome,
    link:"/"

  },
  // {
  //   id:2,
  //   name:"Team",
  //   icon:AiOutlineTeam,
  //   link:"/Team"

  // },{
  //   id:3,
  //   name:"Tournament",
  //   icon:BsTrophy,
  //   link:"/Tournament"

  // },
  // {
  //   id:4,
  //   name:"Portals",
  //   icon:FaStreetView,
  //   link:"/Portals"

  // },
 


]

const Sidebar = () => {
  const router=useRouter()
  const activeItem=useMemo(()=>
    SideBarItem.find((menu)=>
      menu.link==="/"
      // router.pathname
    )
  ,[router.pathname])
  const getSidebarClasses=(menu:any)=>{
    return classNames("flex items-center p-3 mt-2 mb-3 hover: w-56  hover:bg-[#F3A195] cursor-pointer rounded-md",{
      ['bg-[#F26D59]']:activeItem?.id===menu.id
    })
  }

  return (
    <div className='flex '>
   
      
      <div className=' h-screen border-r border-r-gray-200   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden '>
     
      {
        SideBarItem.map((item,index)=>{
          const classes=getSidebarClasses(item)
          return(
            <Link href={item.link} key={index}>
            <div 
            className={classes}
          
            >
              
              <IconItem Icon={item.icon}/>
              <p className='cursor-pointer ml-2 text-white font-medium dark:text-white'>{item.name}</p>
              
            </div>
            </Link>
          )
        })
      }
      <div className='mt-3 ml-3 '>
        <p className='text-white cursor-pointer font-bold font-serif '>My Games</p>
      </div>
      
      <div className='flex items-center flex-wrap mt-2  ml-3 mb-2 '>
      
      </div>
      </div>
      
  
     </div>
  )
}

export default Sidebar