import { Modal } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'
const style = {
  position: 'absolute' as 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: '#1C1B22',
  boxShadow: 24,
  p: 2,
  outline: 0,
  height:460,
};
const SelectedTeam = () => {
  const [teamList,setTeamList]=useState([])
  const {width,height}=useWindowSize()
  const [openModel,setOpenModel]=useState(false)
  const [teaminfo,setTeamInfo]=useState<any>({})
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
  const TeamOpen=(team:any,admin:any)=>{
    setOpenModel(true)
    setTeamInfo({
      admin:admin,
      team:team
    })
  }
  console.log(teaminfo.team)
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
        <div onClick={()=>TeamOpen(item.TeamName,item.Admin)} className='flex items-center'>
          <Image
          src={"https://epulze.com/static/build/unassigned.png"}
          alt=""
          width={40}
          height={40}
          className="rounded-xl"
          />
          <p className='pl-3'>{item?.MainTeam}</p>
        </div>
      </td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer  pl-7'>{moment(item?.Date).format("DD MMM YY h:mma")}</td>
      <td className='text-white font-serif font-medium text-lg cursor-pointer pl-7'>Bangladesh</td>
        </tr>
        )
      })
    }
    
  </tbody>
</table>
    {
      <Modal
      open={openModel}
      onClose={()=>setOpenModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
   >
      <Box sx={{...style,borderRadius:3}}>
        <p className='text-white font-serif font-medium text-lg text-center' >Team Members</p>
        <div className='ml-4 mt-5 h-full w-full cursor-pointer'>
        <div  className="h-9 w-[90%] bg-[black] mt-3 flex items-center justify-between px-4 rounded-sm">
            <p className='text-white'>{teaminfo?.admin}</p>
            <p className='text-lg  font-serif italic text-[#F69134]'>Admin</p>

          </div>
        {
        teaminfo?.team?.map((item:any,index:any)=>{
         return(
          <div key={index} className="h-9 w-[90%] bg-[black] mt-3 flex items-center px-4 rounded-sm">
            <p className='text-white'>{item.TName}</p>
          </div>
         )
        }
        )
       }
        </div>
      
      </Box>

   </Modal>
    }
    </div>
  )
}

export default SelectedTeam