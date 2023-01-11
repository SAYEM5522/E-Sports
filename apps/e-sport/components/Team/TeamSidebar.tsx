import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
const TeamItem=[
  {
    id:1,
    name:"Overview",
    link:"/Team"

  },
  {
    id:2,
    name:"Security",
    link:"/Team/Security"

  },
  {
    id:3,
    name:"Profile Settings",
    link:"/Team/PSettings"

  },
  {
    id:4,
    name:"Prime",
    link:"/Team/Prime"

  }
]
const TeamSidebar = () => {
  const router=useRouter()
  const goto=useCallback((link:any)=>{
    router.push(`${link}`)
  },[])
  return (
    <div className='flex '>
      {
        TeamItem.map((item,index)=>{
          
         return(
          <div key={index}>
            <p onClick={()=>goto(item.link)} className='text-white mr-3 cursor-pointer'>{item.name}</p>
          </div>
         )
        })
      }
    </div>
  )
}

export default TeamSidebar