import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const EachMemberTournamentList = () => {
  const [data,setData]=useState<any>([])
  const getInfo=async()=>{
    const email=Cookies.get("email")
   axios.get(`http://localhost:8081/EachUserTournamentlist/${email}`).then((res)=>{
      setData(res.data.MainInfo)
   }).catch((err)=>{
      console.log(err)
   })
  }
  useEffect(()=>{
   getInfo(),
   ()=>getInfo
  },[])
  return (
    <div >
      <p className='text-white font-serif text-center font-bold text-xl my-3'>Tournament List</p>
    <table className="border-collapse w-full">
    <thead>
      <tr>
        <th className="text-white font-serif font-bold text-xl">Game</th>
        <th className="text-white font-serif font-bold text-xl">Team</th>
        <th className="text-white font-serif font-bold text-xl">Mode</th>
        <th className="text-white font-serif font-bold text-xl">Start</th>
      </tr>
    </thead>
    <tbody  >
      
       {
        data.map((item:any,index:number)=>{
         return(
          <tr className=' h-14 border-b border-t  rounded-sm'>
          <td>
            <p className='text-white font-serif font-medium text-md ml-2 cursor-pointer ' >{item.game}</p>
          </td>
          <td>
            <p className='text-white font-serif font-medium text-md ml-2 cursor-pointer '>{item.team}</p>
          </td>
          <td>
            <p className='text-white font-serif font-medium text-md ml-2 cursor-pointer '>{item.mode}</p>
          </td>
          <td>
            <p className='text-white font-serif font-medium text-md ml-2 cursor-pointer '>{moment(item?.date).format("DD MMM YY h:mma")}</p>
          </td>
         </tr>

         )
        })
       }
    </tbody>
  </table>
  </div>
  )
}

export default EachMemberTournamentList