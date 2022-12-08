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
    <div className='flex items-center'>
    <div
    className='w-60 h-screen border-r dark:border-gray-400'
    >
      <div className='mt-2 '>
      {
        SideBarItem.map((item,index)=>{
          return(
            <div className={`${index===activeIndex?' bg-orange-400 rounded-md':''} flex items-center p-3 mt-3 hover:bg-[whitesmoke] rounded-md`} key={index} onClick={()=>IndexProvier(index)}>
              <IconItem Icon={item.icon}/>
              <p className='cursor-pointer ml-2 text-black font-medium dark:text-white'>{item.name}</p>
            </div>
          )
        })
      }
      </div>
    </div>
     <MenueItem/>
    </div>
  )
}

export default Sidebar