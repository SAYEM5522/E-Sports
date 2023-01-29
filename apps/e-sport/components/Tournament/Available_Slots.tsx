import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Available_Slots = ({slot}:any) => {
  const [teamList,setTeamList]=useState([])
  const  getTeamList=async()=>{
    const eventid=Cookies.get("_t_id")
    await axios.get(`http://localhost:8081/getManyVManyRoute/${eventid}`).then((res)=>{
      setTeamList(res.data)
   }).catch((err)=>{
      console.log(err)
   })
    }
    useEffect(()=>{
      getTeamList()
    },[])
  return (
    <div className='rounded-md w-full h-full ' >
       <p className='h-10 w-full text-center font-serif font-bold text-lg text-white mt-1 bg-[#1C1B22]'>Available Slots</p>
       <div className='flex items-center justify-between px-5 h-14 border-b'>
          <p className='font-serif font-medium text-lg text-white'>Filled Slots</p>
          <p className='font-serif font-medium text-lg text-white'>{teamList?.length}/{slot}</p>
        </div>
        <div className='flex items-center justify-between px-5 h-14 border-b'>
          <p className='font-serif font-medium text-lg text-white'>Signed up</p>
          <p className='font-serif font-medium text-lg text-white'>{teamList?.length}</p>
        </div>
        <div className='flex items-center justify-between px-5 h-14'>
          <p className='font-serif font-medium text-lg text-white'>Reaming Slots </p>
          <p className='font-serif font-medium text-lg text-white'>{slot-teamList?.length}</p>
        </div>
      
    </div>
  )
}

export default Available_Slots