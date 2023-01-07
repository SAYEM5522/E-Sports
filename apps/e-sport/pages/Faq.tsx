import React from 'react'
import Header from '../components/Header/Header'
import FAQ from '../components/MoreInfo/Faq'
import Sidebar from '../components/Sidebar/Sidebar'
import SidebarValue from '../components/Sidebar/SidebarValue'

const Faq = () => {
  return (
    <div className='bg-[#222225] '>
      <Header/>
      <div className=''>
      <div className='flex h-full'>
    <div
    className='w-60  dark:border-gray-400 '
    >
      <SidebarValue/>

      </div>
      <FAQ/>
      </div>
      </div>
    </div>
  )
}

export default Faq