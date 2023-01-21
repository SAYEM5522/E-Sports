import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainPageHeader from './Header/MainPageHeader'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({children}:any) => {
 
    return (
    <div className='bg-[#222225] relative '>
      <MainPageHeader/>
      <div className='flex flex-row justify-start flex-1 '>
        <div className='flex flex-[0.175]'>
        <Sidebar/>

        </div>
      <div className='   bg-[#222225] flex-[0.825]   ' >
        {
          children
        }
      </div>
      

      </div>
      
    
    </div>
  )
}

export default Layout