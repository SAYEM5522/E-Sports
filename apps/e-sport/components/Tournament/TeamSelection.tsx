import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useCallback, useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { selectTeamInfo, setSelectedTeam, setTeamInfo } from '../../feature/userSlice'
const TeamSelection = () => {
  const [teamOpen,setTeamOpen]=useState(false)
  const [team,setTeam]=useState([])
  const dispatch=useDispatch()
  const teamInfo=useSelector(selectTeamInfo)
  const Open=useCallback(()=>{
    setTeamOpen(!teamOpen)
  },[teamOpen])
  const getTeam=async()=>{
    const email=Cookies.get("email")
    await axios.get(`http://localhost:8081/getEachMemberTeamList/${email}`).then((res)=>{
      setTeam(res.data)
      // console.log(res.data)
   }).catch((err)=>{
    console.log(err)

   })
   
  }
  useEffect(()=>{
    getTeam()
  },[])
  return (
    <div onClick={Open} className='w-[90%] relative h-11 bg-[#15141B] rounded-md ml-auto mr-auto mt-20 cursor-pointer '>
      <div className='flex items-center justify-between px-5 pt-2'>
        {
          teamInfo?
         <p className='font-serif text-white font-medium text-lg'>
          {teamInfo}
          </p>:
          <p className='font-serif text-white font-medium text-lg'>
          Select A Team
          </p>
        }
        
        <MdOutlineKeyboardArrowDown size={30} color="white"/>
      </div>
      {
        teamOpen?
        <div className='w-full h-20 bg-[#15141B] absolute top-[2.45rem] left-0 right-0'>
          {
            team.map((item:any,index)=>{
              const setId=(id:any,name:any)=>{
                dispatch(setSelectedTeam({
                  selectedTeam:id
                })),
                dispatch(setTeamInfo({
                  teamInfo:name
                }))
              }
              
              return(
                <div key={index} className="pt-1">
                  <p onClick={()=>setId(item._id,item.Teamname)} className='font-serif text-white font-medium text-lg pl-5 hover:text-black hover:bg-[#CEFF7F]'>{item.Teamname}</p>
                </div>
              )
            })
          }
        </div>:
        null
      }
   
    </div>
  )
}

export default TeamSelection