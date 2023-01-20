import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'

const SelectedTeam = () => {
  const [mode,setMode]=useState<string>()
  const [eventid,setEventId]=useState<string>()
  const [teamList,setTeamList]=useState([])
  const {width,height}=useWindowSize()
const  getTeamList=async()=>{
  const eventid=Cookies.get("_t_id")
  const url="http://localhost:8081/ManyVManyRoute"
  await axios.get(`${url}/${eventid}`).then((res)=>{
    setTeamList(res.data)
 }).catch((err)=>{
    console.log(err)

 })
  }
  useEffect(()=>{
    // setMode(Cookies.get("_m_id"))
    // setEventId(Cookies.get("_t_id"))
    getTeamList()
  },[])
  return (
    <div className='p-3'>
      <table style={{width:width/2}} className="border-collapse bg-[#20395F] ">
  <thead>
    <tr className='h-14 '>
      <th className=" text-white font-serif font-bold text-lg ">TEAM NAME</th>
      <th className="  text-white font-serif font-bold text-lg">JOIN AT</th>
      <th className="  text-white font-serif font-bold text-lg">COUNTRY</th>

    </tr>
  </thead>
  <tbody>
    {
      teamList.map((item:any,index)=>{
        return(
      <tr key={index} className='h-20 bg-[#1C1B22] hover:bg-[#20395F] rounded-2xl border-b border-b-[#081325] '>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>
        <div className='flex items-center'>
          <Image
          src={"https://epulze.com/static/build/unassigned.png"}
          alt=""
          width={40}
          height={40}
          className="rounded-xl"
          />
          <p className='pl-3'>{item.Teamname}</p>
        </div>
      </td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>2022-01-01</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>Bangladesh</td>
        </tr>
        )
      })
    }
    
  </tbody>
</table>
    </div>
  )
}

export default SelectedTeam