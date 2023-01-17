import { Box, Modal } from '@mui/material'
import axios from 'axios'
import classNames from 'classnames'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectSelectedTeam, selectTeamInfo } from '../../feature/userSlice'
import { data } from '../../TournamentInfo'
import { useWindowSize } from '../Hooks/useWindowSize'
import ListOfTeam from './ListOfTeam'
import TeamSelection from './TeamSelection'
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
  const [eventData,setEventData]=useState([])
  const [nextPage,setNextPage]=useState(false)
  const [t_id,setT_id]=useState<string>()
  const teamInfo=useSelector(selectTeamInfo)
  const getSpecificEvent=async()=>{
     const  d_id=Cookies.get('_t_id')
     await axios.get(`http://localhost:8081/getSpecificEvent/${d_id}`).then((res)=>{
       setEventData(res.data)
     }).catch((err)=>{
      console.log(err.response.data.message)
     })
  }
  useEffect(()=>{
    // setT_id(
    // Cookies.get("_t_id")
    // )
  getSpecificEvent()
  },[])
  const openModel=()=>{
    setOpenJoin(true)
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
    <div className='flex items-start mt-3'>
 <div className='bg-[#15141B] h-96 w-[65%] ml-3'>
            <div className='flex items-center justify-between px-5 pt-2'>
         <p className='text-white font-serif text-2xl font-medium'>Sign up closes in  
          <span className='text-white font-serif font-bold text-2xl pl-3'>
              2h 52m
          </span>
         </p>
         <div onClick={openModel} className='w-44 rounded-md items-center justify-center flex h-9 bg-[#CEFF7F]'>
          <p className=' font-serif  font-medium cursor-pointer text-lg'>Join</p>
         </div>
             </div>
             
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
           <p className='text-white text-center font-serif font-medium text-2xl'>{data[0].GName} - {data[0].Mode}</p>
           <p className='text-white text-center font-serif font-medium text-md absolute left-2 '>Mode: {data[0].Mode}</p>
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
            <div className='w-[90%] h-10 bg-black rounded-md ml-auto mr-auto mt-16'>
             <p onClick={OpenNextPage} className='text-white text-center font-serif font-medium text-md pt-2 cursor-pointer '>Next</p>
            </div>
            </div>
           }
         </div>
        </Box>

     </Modal>
           }
             


  </div>
     <div className='bg-black h-28 w-[35%] ml-2 mr-2'>
     <div className='bg-red-400 h-64 w-[100%] '>

     </div>
     <div className='bg-gray-600 h-52 mt-3 w-[100%] '>

     </div>
     </div>
    </div>
  )
}

export default Tournament_Details