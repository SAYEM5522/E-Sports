import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'
import Banner from './Banner'
import Catalog from './Catalog'
import Event from './Event'

const Home = () => {
  const {height,width}=useWindowSize()
  return (
    <div className={`flex flex-col ml-5 h-[35.55rem]  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
      <Catalog/>
      <Banner/>
      <Event/>
    </div>
  )
}

export default Home