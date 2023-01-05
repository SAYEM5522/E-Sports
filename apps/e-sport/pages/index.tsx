import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: NextPage = () => {
  return (
    <div className='bg-[#222225] '>
      <Header/>
      <div className=''>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home
