import React from 'react'
import TeamSidebar from './Team/TeamSidebar'
import Image from 'next/image'
import classNames from 'classnames'
import { useWindowSize } from './Hooks/useWindowSize'
import bg from "../public/default.jpg"
const TeamLayout = ({children}:any) => {
 const {width,height}= useWindowSize()
 
  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden' >
      <div 
      style={{
        width: (width-256),
        height: height-200,
        position: "relative",
        background: `linear-gradient(to bottom, rgba(34,34,37,0.4),#222225), url('https://epulze.com/public/assets/images/mlbb_header_02.png')`,
        backgroundPosition: "center bottom",
        backgroundSize: "contain",
        backgroundRepeat:"no-repeat"
      }}
         >
          <div className='absolute top-[50%] pl-8'>
      <TeamSidebar/>
      </div>
     <div className='pt-72'>
      {
        children
      }
     </div>
     
   </div>
  
   
      
    </div>
  )
}

export default TeamLayout

 {/* <Image
        src={'/../public/default.jpg'}
        alt=""
        fill
        className='object-cover'
        /> */}