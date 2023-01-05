import React, { useCallback, useState } from 'react'
import Home from '../Home/Home'
import News from '../News/News'
import Team from '../Team/Team'
import Tournament from '../Tournament/Tournament'
import {FiHome} from "react-icons/fi"
import {IoNewspaperOutline} from "react-icons/io5"
import {AiOutlineTeam} from "react-icons/ai"
import IconItem from './IconItem'
const SideBarItem=[
  {
    id:1,
    name:"Home",
    icon:FiHome

  },
  {
    id:2,
    name:"Team",
    icon:AiOutlineTeam

  },{
    id:3,
    name:"Tournament",
    icon:FiHome

  },{
    id:4,
    name:"News",
    icon:IoNewspaperOutline

  },{
    id:5,
    name:"Home",
    icon:FiHome

  },
]
const Sidebar = () => {
  const [activeIndex,setActiveIndex]=useState<number>(0)
  const IndexProvier=useCallback((index:number)=>{
   setActiveIndex(index)
  },[activeIndex])
  const MenueItem=()=>{
     if(activeIndex===0){
      return(
     <Home/>
      )
     }
    else if(activeIndex===1){
      return(
     <Team/>
      )
     }
     else if(activeIndex===2){
      return(
     <Tournament/>
      )
     }
     else{
      return(
        <News/>
      )
     }
     
  }
  return (
    <div className='flex'>
    <div
    className='w-60 h-screen border-r  dark:border-gray-400'
    >
      <div className=' bg-[#15141B] h-full'>
      {
        SideBarItem.map((item,index)=>{
          return(
            <div className={`${index===activeIndex?' bg-[#98BC62] rounded-md':''} flex items-center p-3 mb-3 hover:bg-[rgb(152,188,98,0.6)] cursor-pointer rounded-md`} key={index} onClick={()=>IndexProvier(index)}>
              <IconItem Icon={item.icon}/>
              <p className='cursor-pointer ml-2 text-white font-medium dark:text-white'>{item.name}</p>
            </div>
          )
        })
      }
      </div>
    </div>
    <div className='bg-[#222225]'>
    <MenueItem/>
    </div>
    </div>
  )
}

export default Sidebar