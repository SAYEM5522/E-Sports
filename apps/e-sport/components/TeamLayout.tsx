import React, { useCallback, useState } from 'react'
import TeamSidebar from './Team/TeamSidebar'
import Image from 'next/image'
import { useWindowSize } from './Hooks/useWindowSize'
import bg from "../public/default.jpg"
import {AiOutlineScan} from "react-icons/ai"
import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import EachMemberTournamentList from './Team/EachMemberTournamentList'
const style = {
  position: 'absolute' as 'absolute',
  top: '53%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:500,
};
const TeamLayout = ({children}:any) => {
 const {width,height}= useWindowSize()
 const [open,setOpen]=useState<boolean>(false)
 
const OpenModel=()=>{
  setOpen(true)
}
  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden' >
      <div 
      style={{
        width: (width-256),
        height: height-200,
        position: "relative",
        background: `linear-gradient(to bottom, rgba(34,34,37,0.4),#222225), url('https://epulze.com/public/assets/images/mlbb_header_02.png')`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
         >
          <div className='absolute top-[15%] pl-8'>
          <div className='w-[100px] h-[100px] relative '>
          <Image 
          src={"https://epulze.com/public/assets/images/mlbb_header_02.png"}
          alt=""
         fill
          className="rounded-[50px] object-cover cursor-pointer"
          />
          </div>
          <div className='flex items-center'>
          <p className='text-white font-serif text-lg font-bold pl-3 mr-3' >Sayem</p>
          <AiOutlineScan onClick={OpenModel} size={25} color="white" className='cursor-pointer'/>
          </div>
          </div>
         
          <div className='absolute top-[50%] pl-8'>
      <TeamSidebar/>
      </div>
     <div className='pt-72'>
      {
        children
      }
     </div>
     
   </div>
  
   {
     <Modal
     open={open}
     onClose={()=>setOpen(false)}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
  >
     <Box sx={{...style,borderRadius:3}}>
     <EachMemberTournamentList/>
     </Box>

  </Modal>
   }
      
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