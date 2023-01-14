import React from 'react'
import Header from './Header/Header'

const LandingLayout = ({children}:any) => {
  return (
    <div className='bg-[#222225] '>
      <Header/>
      <div className='flex flex-row  '>
      <div >
        {
          children
        }
      </div>
      </div>
    
    </div>
  )
}

export default LandingLayout