import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
const TeamItem=[
  {
    id:1,
    name:"Overview",
    link:"/TournamentDetails"

  },
  {
    id:2,
    name:"Bracket",
    link:"/Tournament/Bracket"

  },
  {
    id:4,
    name:"Teams",
    link:"/Tournament/Teams_List"

  },
  {
    id:3,
    name:"Rules",
    link:"/Tournament/Rules"

  },
  
]
const TournamentSidebar = () => {
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

export default TournamentSidebar