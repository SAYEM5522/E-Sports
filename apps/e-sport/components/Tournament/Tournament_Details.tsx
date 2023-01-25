import { Box, Modal } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useCallback, useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {  selectTeamInfo, selectTournamentModeCheck, selectTournamentModel, setLayoutBanner, setTournamentModel } from '../../feature/userSlice'
import ListOfTeam from './ListOfTeam'
import TeamSelection from './TeamSelection'
import { motion } from 'framer-motion';
import TimeCountDown from './TimeCountDown'
import moment from 'moment';
import { useRouter } from 'next/router'
import Tournament_Price from './Tournament_Price'
import Footer from '../Footer/Footer'
import Image from 'next/image'
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
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:590,
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
  const [eventData,setEventData]=useState<any>([])
  const [nextPage,setNextPage]=useState(false)
  const [timeInfo,setTimeInfo]=useState(false)
  const teamInfo=useSelector(selectTeamInfo)
  const TournaMentModelOpen=useSelector(selectTournamentModel)
  const TournamentModeCheck=useSelector(selectTournamentModeCheck)
  const [check,setCheck]=useState<any>(false)
  const dispatch=useDispatch()
  const router=useRouter()
  const getSpecificEvent=async()=>{
     const  d_id=Cookies.get('_t_id')
     await axios.get(`http://localhost:8081/getSpecificEvent/${d_id}`).then((res)=>{
       setEventData(res.data)
       dispatch(setLayoutBanner({
        layoutBanner:res.data[0]?.Banner
       }))
     }).catch((err)=>{
      console.log(err.response.data.message)
     })

     const eventid=Cookies.get("_t_id")
     const em=Cookies.get("email")
     await axios.get(`http://localhost:8081/getManyVManyRoute/${eventid}`).then((res)=>{
     const  team = res.data.filter((t:any) => t.TeamName.some((member:any) => member.TName === em))
     if(team.length>0){
      setCheck(true)
     }
    }).catch((err)=>{
       console.log(err)
   
    })

    
  }
  useEffect(()=>{
  getSpecificEvent(),
  ()=>getSpecificEvent()
  },[check,TournamentModeCheck])
  const openModel=()=>{
    dispatch(setTournamentModel({
      TournamentModel:true
    }))
  } 
  const handleDataFromChild =(data:any) => {
    setTimeInfo(data.message)
  };
  const MakeTeam=()=>{
    router.push("/Create_Team")
   }
 
  const OpenNextPage=useCallback(async()=>{
    if(teamInfo){
      setNextPage(true)

    }
  },[nextPage,teamInfo])
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
              {
                check?<p className='text-white font-serif text-sm w-28'>You have joined on the tournament for more details
                <span className='underline font-serif italic text-white font-medium cursor-pointer'> Click</span> </p>:

                <motion.button   variants={buttonVariants}
      onClick={openModel}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-44 rounded-md items-center justify-center flex h-9 bg-[#F69134] font-serif  font-medium cursor-pointer text-lg'>Join</motion.button>
              }
        
          </div>
      }   
           {
            eventData&&
     <Modal
        open={TournaMentModelOpen}
        onClose={()=>  dispatch(setTournamentModel({
          TournamentModel:false
        }))}
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
            <ListOfTeam mode={Number(eventData[0]?.Mode.split("")[0])} />
          </div>
            :
            <div>
            <div className='w-52 h-32 bg-[#15141B] cursor-pointer grid place-items-center rounded-md ml-auto mr-auto mt-20 '>
              <div className='w-[170px] h-9 relative'>
              <Image
              src={"/../public/logo2.png"}
              alt=""
              fill
              className="object-fill cursor-pointer"
              />
            </div>
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
      className='w-[89%] ml-6 mt-3  rounded-sm items-center justify-center  h-8 bg-[#F69134] font-serif text-white font-medium cursor-pointer text-lg'>Create Team</motion.button>
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
    <p className='text-white font-serif text-md'>{eventData[0]?.Tournament_Info}</p>
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