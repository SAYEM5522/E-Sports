import React from 'react'
import Header from './Header/Header'

const LandingLayout = ({children}:any) => {
  return (
    <div >
      <Header/>
      <div className=''>
        {
          children
        }
      </div>
    
    </div>
  )
}

export default LandingLayout