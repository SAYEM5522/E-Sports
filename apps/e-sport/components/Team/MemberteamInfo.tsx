import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MemberteamInfo = ({email}:any) => {
  const [team,setTeam]=useState([])


  const getTeam=async()=>{
    await axios.get(`http://localhost:8081/getEachMemberTeamList/${email}`).then((res)=>{
      setTeam(res.data)
   }).catch((err)=>{
    console.log(err)

   })
  }
  useEffect(()=>{
  
    getTeam()
  },[email])
  const router=useRouter()
  return (
    <div>
      <p className='text-white font-serif font-medium text-lg text-center p-3  '>Team List </p>
      <div className='h-[71%] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden  '>
        {
            team.map((item:any,index)=>{
              const GoToTeam=()=>{
                // router.push(`/Team/TeamInfo`)
                // Cookies.set("__tid__",item._id,{expires:1})
              }
              
              return(
                <div onClick={GoToTeam} key={index} className="mt-2 pt-1 cursor-pointer flex items-center  hover:text-black hover:bg-[#F3A195]">
                  <div className='w-[30px] h-[30px] relative ml-3'>
                  <Image 
                  src={`/${item.Profile}`}
                  className="object-cover rounded-lg"
                  fill
                  alt=""
                  />
                  </div>
                 
                  <p  className='font-serif text-white font-medium text-lg pl-5  hover:text-black'>{item.Teamname}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default MemberteamInfo