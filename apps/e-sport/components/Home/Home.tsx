import React from 'react'
import Banner from './Banner'
import Catalog from './Catalog'
import Event from './Event'

const Home = () => {
  return (
    <div className='flex flex-col  '>
      <Catalog/>
      <Banner/>
      <Event/>
    </div>
  )
}

export default Home