import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
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
  const activeItem=useMemo(()=>
  TeamItem.find((menu)=>
      menu.link===router.pathname
    )
  ,[router.pathname])
  const getTeamSidebarClasses=(menu:any)=>{
    return classNames("text-white mr-4 cursor-pointer uppercase  ",{
      ['border-b-2 border-green-500']:activeItem?.id===menu.id
    })
  }
  return (
    <div className='flex '>
      {
        TeamItem.map((item,index)=>{
          const classes=getTeamSidebarClasses(item)
          
         return(
          <Link href={item.link} key={index}>
          <div  >
            <p onClick={()=>goto(item.link)} className={classes}>{item.name}</p>
          </div>
          </Link>
         )
        })
      }
    </div>
  )
}

export default TeamSidebar