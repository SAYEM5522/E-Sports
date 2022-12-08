import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: NextPage = () => {
  return (
    <div >
      <Header/>
      <div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home
