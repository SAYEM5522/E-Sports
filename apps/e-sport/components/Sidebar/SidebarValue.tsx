import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { BsTrophy } from 'react-icons/bs'
import { FaStreetView } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoNewspaperOutline } from 'react-icons/io5'
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
  
const SidebarValue = () => {
  const [activeIndex,setActiveIndex]=useState<number>(0)
  const CurrencyFormat="Taka"
  const IndexProvier=useCallback((index:number)=>{
   setActiveIndex(index)
  },[activeIndex])
  return (
    <div className=' bg-[#15141B] h-full'>
      <div className='h-16 bg-[#23222A] flex items-center justify-between  '>
        <div className='ml-3'>
        <p className='text-white font-serif font-bold'>Your Balance </p>
        <p className='text-white font-serif font-medium'>10 {CurrencyFormat}</p>
        </div>
        <IoIosArrowForward className='cursor-pointer mr-3' size={28} color='white'/>
       </div>
      {
        SideBarItem.map((item,index)=>{
          return(
            <div className={`${index===activeIndex?' w-56 bg-[#98BC62] rounded-md':''} flex items-center p-3 mt-2 mb-3 hover: w-56 hover:bg-[rgb(152,188,98,0.6)] cursor-pointer rounded-md`} key={index} onClick={()=>IndexProvier(index)}>
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
  )
}

export default SidebarValue