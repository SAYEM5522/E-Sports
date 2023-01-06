import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'
import Event from '../Tournament/Event'
import Banner from './Banner'
import Catalog from './Catalog'

const Home = () => {
  const {height,width}=useWindowSize()
  return (
    <div className={`flex flex-col ml-7 h-[35.55rem]   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
      <Catalog/>
      <div>
      <Banner/>
      </div>
      <div >
      <Event/>

      </div>
    </div>
  )
}

export default Home