import { useTheme } from 'next-themes'
import React, { useCallback, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {HiOutlineMoon} from "react-icons/hi"
import {BsChevronDown} from "react-icons/bs"
import GameBox from './GameBox'
import InfoBox from './InfoBox'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const Header = () => {
 
  
  const [openGame,setGame]=useState<boolean>(false)
  const [openInfo,setOpenInfo]=useState<boolean>(false)
  const [openLogIn,setOpenLogIn]=useState<boolean>(false)
  const [openSignUp,setOpenSignUp]=useState<boolean>(false)

  const router=useRouter()

  const OpenGameBox=useCallback(()=>{
      setGame(!openGame)
  },[openGame])
  const OpenMoreBox=useCallback(()=>{
    setOpenInfo(!openInfo)
},[openInfo])
    const Login=useCallback(()=>{
      setOpenLogIn(true)
    },[openLogIn])
    const Signup=useCallback(()=>{
      setOpenSignUp(true)
    },[openSignUp])
    
    const HonePage=()=>{
      router.push("/")
    }
    const NewsPage=()=>{
      router.push("/News")
    }
    const style = {
      position: 'absolute' as 'absolute',
      top: '52%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      bgcolor: '#1C1B22',
      boxShadow: 24,
      p: 4,
      outline: 0,
      height:530,
    };
    const style2 = {
      position: 'absolute' as 'absolute',
      top: '52%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 350,
      bgcolor: '#1C1B22',
      boxShadow: 24,
      p: 4,
      outline: 0,
      height:310,
    };
  return (
    <div
    className=' flex  items-center justify-between   h-14 bg-[#1C1B22]'
    >
    <div>
    </div>
    <div className='flex items-center justify-center ml-10' >
  
      <p onClick={HonePage} className='text-white pl-9 font-serif font-medium cursor-pointer'>Home</p>
      <div className='flex items-center cursor-pointer relative' onClick={OpenGameBox}>
          <p className='text-white pl-9 font-serif font-medium'>Games</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openGame?<GameBox/>:null
            }
          </div>
      <p  className='text-white pl-9 font-serif font-medium cursor-pointer'>Play</p>
      <p onClick={NewsPage} className='text-white pl-9 font-serif font-medium cursor-pointer'>News</p>
      <div className='flex items-center cursor-pointer relative' onClick={OpenMoreBox}>
          <p className='text-white pl-9 font-serif font-medium' >More</p>
            <BsChevronDown color='white' className='pl-2 h-6 w-6'/>
            {
              openInfo?<InfoBox/>:null
            }
          </div>



    </div>
    <div className='flex items-center mr-10'>
     
        <p onClick={Login} className=' text-[#B6FF40] mr-10 font-serif cursor-pointer font-xl'>Login</p>
      <div onClick={Signup} className='h-10 w-20 flex items-center justify-center rounded-md cursor-pointer bg-[#B6FF40]'>
        <p className=' font-serif font-xl'>Signup</p>
      </div>
      {/* {
        openLogIn? */}
        <Modal
        open={openLogIn}
        onClose={()=>{setOpenLogIn(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
        <Box sx={{...style,borderRadius:3}}>
        
        </Box>

</Modal>
{/* :null
      } */}
      {/* {
        openSignUp? */}
        <Modal
        open={openSignUp}
        onClose={()=>{setOpenSignUp(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
>
        <Box sx={{...style2,borderRadius:3}}>
        
        </Box>

</Modal>
{/* :null

      } */}
    </div>
    </div>
    
  )
}

export default Header