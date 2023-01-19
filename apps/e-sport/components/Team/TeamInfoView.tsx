import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'
const TeamInfoView = () => {
 const {width,height}= useWindowSize()
 const [info,setInfo]=useState<any>([])

 const router=useRouter()
 const id=router.query.id
  const getEachTeamInfo=async()=>{
   axios.get(`http://localhost:8081/getEachTeamInfo/${id}`).then((res)=>{
       setInfo(res.data)
   }).catch((err)=>{
      console.log(err)
   })
  }
  useEffect(()=>{
    getEachTeamInfo(),
    ()=>getEachTeamInfo()
  },[id])


  return (
    <div className=' w-full h-screen    overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden' >
       <div 
      style={{
        width: (width-256),
        height: height-280,
        position: "relative",
        background: `linear-gradient(to bottom, rgba(34,34,37,0.4),#222225), url('https://epulze.com/public/assets/images/mlbb_header_02.png')`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
         >
        <div className=' flex-col pt-[200px] pl-5'>
          <div className='w-[100px] h-[100px] relative '>
          <Image 
          src={"https://epulze.com/public/assets/images/mlbb_header_02.png"}
          alt=""
         fill
          className="rounded-[50px] object-cover cursor-pointer"
          />
          </div>
          <p className='text-white font-serif text-lg font-bold pl-3' >{info[0]?.Teamname}</p>
          
        </div>
         </div>
    </div>
  )
}

export default TeamInfoView