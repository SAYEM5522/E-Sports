import React from 'react'
import { useWindowSize } from '../Hooks/useWindowSize'
import Layout from '../Layout'
import Event from '../Tournament/Event'
import Banner from './Banner'
import Catalog from './Catalog'

const Home = () => {
  const {height,width}=useWindowSize()
  return (
    <div className={`flex flex-col w-full ml-auto mr-auto h-[35.55rem]   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
      <Catalog/>
      <div>
      <Banner/>
      </div>
      <div >
      <Event show={true} filter={false} type="Recommended Events"/>
      </div>
     
    </div>
  )
}

export default Home