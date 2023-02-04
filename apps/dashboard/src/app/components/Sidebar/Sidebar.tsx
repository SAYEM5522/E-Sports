"use client";
import React, { useCallback, useMemo, useState } from 'react'
import {FiHome} from "react-icons/fi"
import {IoNewspaperOutline} from "react-icons/io5"
import {AiOutlineTeam} from "react-icons/ai"
import {BsPlusSquareDotted, BsTrophy} from "react-icons/bs"
import IconItem from './IconItem'
import {FaStreetView} from "react-icons/fa"
import Image from 'next/image'
import {IoIosArrowForward} from "react-icons/io"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import {MdOutlineLeaderboard} from "react-icons/md"

const SideBarItem=[
  {
    id:1,
    name:"Home",
    icon:FiHome,
    link:"/"

  },
  {
    id:2,
    name:"Team",
    icon:AiOutlineTeam,
    link:"/Team"

  },{
    id:3,
    name:"Tournament",
    icon:BsTrophy,
    link:"/Tournament"

  },
  {
    id:4,
    name:"Portals",
    icon:FaStreetView,
    link:"/Portals"

  },
  {
    id:5,
    name:"News",
    icon:IoNewspaperOutline,
    link:"/News"

  },


]

const style = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:590,
};
const Sidebar = () => {
  const CurrencyFormat="Taka"
  const router=useRouter()
  const [openModel,setOpenModel]=useState(false)

  const activeItem=useMemo(()=>
    SideBarItem.find((menu)=>
      menu.link===router.pathname
    )
  ,[router.pathname])
  const getSidebarClasses=(menu:any)=>{
    return classNames("flex items-center p-3 mt-2 mb-3 hover: w-56  hover:bg-[#F3A195] cursor-pointer rounded-md",{
      ['bg-[#F26D59]']:activeItem?.id===menu.id
    })
  }
  const ModelOpen=()=>{
    setOpenModel(true)
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
              <p className='cursor-pointer ml-2 text-black font-medium dark:text-white'>{item.name}</p>
              
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