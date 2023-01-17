import React from 'react'
import { useWindowSize } from './Hooks/useWindowSize'
import TournamentSidebar from './Tournament/TournamentSidebar'

const TournamentLayout = ({children}:any) => {
 const {width,height}= useWindowSize()
  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden'>
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
      <TournamentSidebar/>
      </div>
      <div className='absolute top-[65%]  w-full' >
   {
        children
      }
   </div>
   </div>
    </div>
  )
}

export default TournamentLayout