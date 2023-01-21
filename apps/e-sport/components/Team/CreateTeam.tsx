import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import Image from 'next/image';
const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.06
  }
};
const CreateTeam = () => {
  const router=useRouter()
  const MakeTeam=()=>{
   router.push("/Create_Team")
  }
  const [team,setTeam]=useState([])
  const getTeam=async()=>{
    const email=Cookies.get("email")
    await axios.get(`http://localhost:8081/getEachMemberTeamList/${email}`).then((res)=>{
      setTeam(res.data)
      
   }).catch((err)=>{
    console.log(err)

   })
   
  }
  useEffect(()=>{
    getTeam()
  },[])
  console.log(team)
  return (
    <div className='w-full h-full'>
        <p className='text-white font-serif font-medium text-lg text-center p-3  '>Create Team</p>
        <div className='h-[50%] '>
        {
            team.map((item:any,index)=>{
              const GoToTeam=()=>{
                router.push(`/Team/${item._id}`),
                Cookies.set("__tid__",item._id,{expires:1})
              }
              
              return(
                <div onClick={GoToTeam} key={index} className="mt-2 pt-1 cursor-pointer flex items-center  hover:text-black hover:bg-[#CEFF7F]">
                  <div className='w-[30px] h-[30px] relative ml-3'>
                  <Image 
                  src={`/../apps/Server/upload/2023-01-21T10-19-40.855Zty.PNG`}
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
        <motion.button  
        onClick={MakeTeam}
         variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-5 mt-2  rounded-sm items-center justify-center  h-8 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>
    </div>
  )
}

export default CreateTeam