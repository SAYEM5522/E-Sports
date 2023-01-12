import React from 'react'
import TeamSidebar from './Team/TeamSidebar'
import bg from "../public/default.jpg"
import Image from 'next/image'
import classNames from 'classnames'
import { useWindowSize } from './Hooks/useWindowSize'
const TeamLayout = ({children}:any) => {
 const {width,height}= useWindowSize()
 
  return (
    <div >
      <div style={{width:(width-257),height:height-58,position:"relative"}}  >
        <Image
        src={'/../public/default.jpg'}
        alt=""
        fill
        className='object-cover'
        />
        <div className='absolute top-[50%] pl-8'>
      <TeamSidebar/>
      </div>
      </div>
      
      {
        children
      }
    </div>
  )
}

export default TeamLayout