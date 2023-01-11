import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import Header from './Header/Header'
import MainPageHeader from './Header/MainPageHeader'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({children}:any) => {
 
    return (
    <div className='bg-[#222225] '>
      <MainPageHeader/>
      <div className='flex flex-row justify-start '>
           <Sidebar/>
      <div >
        {
          children
        }
      </div>
      </div>
    
    </div>
  )
}

export default Layout