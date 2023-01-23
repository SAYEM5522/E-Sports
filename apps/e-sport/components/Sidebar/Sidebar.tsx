import React, { useCallback, useMemo, useState } from 'react'
import {FiHome} from "react-icons/fi"
import {IoNewspaperOutline} from "react-icons/io5"
import {AiOutlineTeam} from "react-icons/ai"
import {BsTrophy} from "react-icons/bs"
import IconItem from './IconItem'
import {FaStreetView} from "react-icons/fa"
import Image from 'next/image'
import {IoIosArrowForward} from "react-icons/io"
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import {MdOutlineLeaderboard} from "react-icons/md"
import {BsWallet2} from "react-icons/bs"
import { useWindowSize } from '../Hooks/useWindowSize'
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
  {
    id:6,
    name:"Leader Board",
    icon:MdOutlineLeaderboard,
    link:"/Leader_Board"

  },

]
export const GameList=[
  {
    id:1,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Valorant"

  },
  {
    id:2,
    img:"https://i.pinimg.com/736x/e6/99/fb/e699fb7cd6ce72d00445fac66fdfc997--old-friends-dota--logo.jpg",
    name:"CS:GO"

  },
  {
    id:3,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Dota 2"

  },
  {
    id:4,
    img:"https://steamuserimages-a.akamaihd.net/ugc/1289667502762077035/0BBD690EF2F84B522A6E1D34EBE5F1513685C089/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    name:"Valorant"

  }
]
const Sidebar = () => {
  const CurrencyFormat="Taka"
  const router=useRouter()
  const {width,height}=useWindowSize()

  const activeItem=useMemo(()=>
    SideBarItem.find((menu)=>
      menu.link===router.pathname
    )
  ,[router.pathname])
  const getSidebarClasses=(menu:any)=>{
    return classNames("flex items-center p-3 mt-2 mb-3 hover: w-56  hover:bg-[rgb(152,188,98,0.6)] cursor-pointer rounded-md",{
      ['bg-[#98BC62]']:activeItem?.id===menu.id
    })
  }

  return (
    <div className='flex '>
    {/* <div
    className='w-60  '
    
    > */}
      
      <div className=' bg-[#15141B] h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden '>
      <div className='h-16 bg-[#23222A] flex items-center justify-between  '>
        <div className='ml-3'>
        <p className='text-white font-serif font-bold'>Your Balance </p>
        <p className='text-white font-serif font-medium'>10 {CurrencyFormat}</p>
        </div>
        <Link href={"/Wallet/Wallet"}>
        <IoIosArrowForward  className='cursor-pointer mr-3' size={28} color='white'/>

        </Link>
       </div>
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
      <div className='flex items-center flex-wrap  ml-3 mb-2 '>
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
      
    {/* </div> */}
     </div>
  )
}

export default Sidebar