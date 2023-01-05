import React, { useCallback, useState } from 'react'
import Home from '../Home/Home'
import News from '../News/News'
import Team from '../Team/Team'
import Tournament from '../Tournament/Tournament'
import {FiHome} from "react-icons/fi"
import {IoNewspaperOutline} from "react-icons/io5"
import {AiOutlineTeam} from "react-icons/ai"
import {BsTrophy} from "react-icons/bs"
import IconItem from './IconItem'
import {FaStreetView} from "react-icons/fa"
import Portals from '../Portals/Portals'
import Image from 'next/image'
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
    icon:BsTrophy

  },
  {
    id:4,
    name:"Portals",
    icon:FaStreetView

  },
  {
    id:5,
    name:"News",
    icon:IoNewspaperOutline

  },
]
const GameList=[
  {
    id:1,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Valorant"

  },
  {
    id:2,
    img:"https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997--old-friends-dota--logo.jpg",
    name:"Valorant"

  },
  {
    id:3,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Valorant"

  },
  {
    id:4,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Valorant"

  }
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
     else if(activeIndex===3){
      return(
        <Portals/>
      )
     }
     else if(activeIndex===4){
      return(
        <News/>
      )
     }
     return null
     
   
 
     
  }
  return (
    <div className='flex h-full'>
    <div
    className='w-60  dark:border-gray-400'
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
      <div className='mt-3 ml-3 '>
        <p className='text-white cursor-pointer font-bold font-serif '>My Games</p>
      </div>
      <div className='flex items-center flex-wrap  ml-3 '>
        {
        GameList.map((item,index)=>{
          return(
            <div key={index}>
              <Image
              src={item.img}
              alt={item?.name.charAt(0)}
              height={47}
              width={47}
              className="rounded-lg cursor-pointer mr-4 mt-2"
              />
            </div>
          )
        })
        }
      </div>
      </div>
      
    </div>
    <MenueItem/>
     </div>
  )
}

export default Sidebar