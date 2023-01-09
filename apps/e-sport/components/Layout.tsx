import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({children}:any) => {
  const user=false
    return (
    <div className='bg-[#222225] '>
      <Header/>
      <div className='flex flex-row justify-start '>
        {
           user?
           <Sidebar/>
           :
           null

        }
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