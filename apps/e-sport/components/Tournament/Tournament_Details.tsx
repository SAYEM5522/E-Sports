import { Box, Modal } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useCallback, useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectSelectedTeam, selectTeamInfo } from '../../feature/userSlice'
import { data } from '../../TournamentInfo'
import ListOfTeam from './ListOfTeam'
import TeamSelection from './TeamSelection'
import { motion } from 'framer-motion';
import TimeCountDown from './TimeCountDown'
import moment from 'moment';

import { useRouter } from 'next/router'
import Tournament_Price from './Tournament_Price'
import Footer from '../Footer/Footer'
const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.1
  }
};
const style = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:550,
};
interface EProps{
  
    Id: number,
    Logo: string,
    GName: string,
    Server: string,
    EntryFee: number,
    Date: string,
    Mode: string,
    Slot: string,
    Banner: string,

}
const Tournament_Details = () => {
  const [openJoin,setOpenJoin]=useState<boolean>(false)
  const [eventData,setEventData]=useState<any>([])
  const [nextPage,setNextPage]=useState(false)
  const [timeInfo,setTimeInfo]=useState(false)
  const teamInfo=useSelector(selectTeamInfo)
  const router=useRouter()
  const getSpecificEvent=async()=>{
     const  d_id=Cookies.get('_t_id')
     await axios.get(`http://localhost:8081/getSpecificEvent/${d_id}`).then((res)=>{
       setEventData(res.data)
     }).catch((err)=>{
      console.log(err.response.data.message)
     })
  }
  useEffect(()=>{
  getSpecificEvent()
  },[])
  const openModel=()=>{
    setOpenJoin(true)
  } 
  const handleDataFromChild =(data:any) => {
    setTimeInfo(data.message)
  };
  const MakeTeam=()=>{
    router.push("/Create_Team")
   }
  const OpenNextPage=useCallback(async()=>{
    const TeamInformation={
      EventId:Cookies.get('_t_id'),
      MainTeam:teamInfo,
      Profile:""
    }
    axios.post(`http://localhost:8081/ManyVManyRoute`,TeamInformation).then((res)=>{
     console.log(res.data)
    }).catch((err)=>{
    console.log(err)
    })
    
    setNextPage(true)
  },[nextPage])
  return (
    <>
    <div className='flex items-start mt-3'>
    <div className=' h-96 w-[65%] ml-3'>
      {
        timeInfo?
        <p className='text-white font-serif text-2xl font-medium'>Tournament joining time has finished</p>:

        <div className='flex items-center justify-between px-5 pt-2'>
              
                
        <div className='flex'>
        <p className='text-white font-serif text-xl font-medium'>Sign up closes in </p>
        
             <TimeCountDown callback={handleDataFromChild} startTime={eventData[0]?.Date}/>
         
        
              </div>
        <motion.button   variants={buttonVariants}
      onClick={openModel}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-44 rounded-md items-center justify-center flex h-9 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Join</motion.button>
          </div>
      }
           
             
           {
            eventData&&
     <Modal
        open={openJoin}
        onClose={()=>setOpenJoin(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
     >
        <Box sx={{...style,borderRadius:3}}>
         <div className='relative'>
           <p className='text-white text-center font-serif font-medium text-2xl'>{eventData[0]?.GName} - {eventData[0]?.Mode}</p>
           <p className='text-white text-center font-serif font-medium text-md absolute left-2 '>Mode: {eventData[0]?.Mode}</p>
           {
            nextPage?
            <div className='relative '>
            <MdArrowBackIos onClick={()=>setNextPage(false)} color='white' size={30} className='absolute left-2 top-6 cursor-pointer'/>
            <ListOfTeam mode={Number(data[0]?.Mode.split("")[0])} />
          </div>
            :
            <div>
            <div className='w-52 h-32 bg-[#15141B] cursor-pointer rounded-md ml-auto mr-auto mt-20 '>

            </div>
            <div >
              <TeamSelection/>
            </div>
            <motion.button  
         variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      onClick={MakeTeam}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[89%] ml-6 mt-3  rounded-sm items-center justify-center  h-8 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create Team</motion.button>
            <div className='w-[90%] h-10 bg-black rounded-md ml-auto mr-auto mt-16'>
             <p onClick={OpenNextPage} className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Next</p>
            </div>
            </div>
           }
         </div>
        </Box>

     </Modal>
           }
  <div className='h-[35%] flex flex-wrap justify-between  mt-2 ml-4 mr-4 border-t border-b border-[rgba(0,0,0,0.4)]'>
    <div>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Mode</p>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>{eventData[0]?.Mode}</p>
    </div>
    <div>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Server</p>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>{eventData[0]?.Server}</p>
    </div>
    <div>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Entry Fee</p>
      {
                      eventData[0]?.EntryFee===0?
                      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer  '>Free to enter</p>:
                      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer  '>{eventData[0]?.EntryFee}</p>

                    }
    </div>
    <div>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Start At</p>
      <p className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>{moment(eventData[0]?.Date).format("DD MMM YY h:mma")}</p>
    </div>
  </div>
  <div>
    <p className='font-serif font-medium text-2xl  text-white py-3'>Tournament info</p>
    <p className='text-white font-serif'>{eventData[0]?.Tournament_Info}</p>
  </div>

  </div>
     <div className=' h-28 w-[35%] ml-2 mr-2'>
     <div className='bg-[#15141B] h-64 w-[100%] rounded-md '>
      <Tournament_Price/>
     </div>
     <div className='bg-gray-600 h-52 mt-3 w-[100%] '>

     </div>
     </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Tournament_Details