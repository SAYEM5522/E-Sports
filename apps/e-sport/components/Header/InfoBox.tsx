import { useRouter } from 'next/router'
import React, { useState } from 'react'
import MenueItem from '../Sidebar/MenueItem'
const More=[
  {
    id:5,
    name:"FAQ"
  },
  {
    id:6,
    name:"Terms & Conditions"
  },{
    id:7,
    name:"About"
  },
]
const InfoBox = () => {
 const [activeIndex,setActiveIndex]=useState(null)
 const router=useRouter()
const IdentityIndex=(index:any)=>{
    router.push("/Faq")
}
  return (
    <div className='h-44 w-44 bg-black absolute top-10 -left-7 r-0 rounded-md z-20'>
      {
        More.map((item,index)=>{
          return(
            <div key={index}>
            <p onClick={()=>IdentityIndex(item.name)} className='text-white font-serif text-md p-2 mt-2 hover:bg-red-400 text-center hover:rounded-sm '>{item.name}</p>
            </div>
          )
        })
      }
      <div>
      </div>
       

    </div>
  )
}

export default InfoBox