
// "use client";
import React, { useEffect, useState } from 'react'


const EventRule = async() => {
//  const [id,setId]=useState()

  const res= await fetch("http://localhost:8081/getEvent")
  const event=await res.json()
  
//  const event=await getEvent()
  return (
    <div className='px-3'>
      <p className='text-xl ml-2 font-serif font-medium'>Select the event</p>
      {
        event.map((item:any,index:number)=>{
          return(
            <div key={index} className='h-10 flex px-2 items-center justify-between m-1 cursor-pointer w-72 bg-red-200 rounded-sm'>
            <p>{item.GName}</p>
            <p>{item.Mode}</p>
            <p>{item.Server}</p>

            </div>
          )
        })
      }
    </div>
  )
}

export default EventRule