import { useRouter } from 'next/router'
import React, { useState } from 'react'
const More=[
  {
    id:5,
    name:"FAQ",
    link:"/Faq"
  },
  {
    id:6,
    name:"Terms & Conditions",
    link:"/Terms_Condition"
  },{
    id:7,
    name:"About",
    link:"/About"
  },
]
const InfoBox = () => {
 const [activeIndex,setActiveIndex]=useState(null)
 const router=useRouter()
const IdentityIndex=(name:any)=>{
    router.push(`${name}`)
}
  return (
    <div className='h-44 w-44 bg-black absolute top-10 -left-7 r-0 rounded-md z-20'>
      {
        More.map((item,index)=>{
          return(
            <div key={index}>
            <p onClick={()=>IdentityIndex(item.link)} className='text-white font-serif text-md p-2 mt-2 hover:bg-red-400 text-center hover:rounded-sm '>{item.name}</p>
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