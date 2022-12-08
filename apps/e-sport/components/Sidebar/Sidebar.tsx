import React, { useCallback, useState } from 'react'
import Home from '../Home/Home'
import News from '../News/News'
import Team from '../Team/Team'
import Tournament from '../Tournament/Tournament'
const SideBarItem=[
  {
    id:1,
    name:"Home"
  },
  {
    id:2,
    name:"Team"
  },{
    id:3,
    name:"Tournament"
  },{
    id:4,
    name:"News"
  },{
    id:5,
    name:"Home"
  },
]
const Sidebar = () => {
  const [activeIndex,setActiveIndex]=useState<number>(0)
  const IndexProvier=useCallback((index:number)=>{
   setActiveIndex(index)
  },[activeIndex])
  const MenueItem=()=>{
     if(activeIndex===0){
      return(
     <Home/>
      )
     }
    else if(activeIndex===1){
      return(
     <Team/>
      )
     }
     else if(activeIndex===2){
      return(
     <Tournament/>
      )
     }
     else{
      return(
        <News/>
      )
     }
     
  }
  return (
    <div className='flex items-center'>
    <div
    className='w-60 bg-gray-800 h-screen'
    >
      {
        SideBarItem.map((item,index)=>{
          return(
            <div key={index} onClick={()=>IndexProvier(index)}>
              <p className='cursor-pointer text-white'>{item.name}</p>
            </div>
          )
        })
      }
    </div>
     <MenueItem/>
    </div>
  )
}

export default Sidebar