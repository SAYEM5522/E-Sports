import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Banner from '../components/Home/Banner'
import Catalog from '../components/Home/Catalog'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar/Sidebar'
import Event from '../components/Tournament/Event'

const Home: NextPage = () => {
  const user=false
  return (
    <Layout>
      {/* <div className=' ml-auto mr-auto'> */}
        <div className={`flex flex-col ${user?'ml-7':'ml-36'} h-[35.55rem]   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
          <Catalog/>
      <div>
      <Banner/>
      </div>
      {/* <div > */}
      <Event show={true} filter={false} type="Recommended Events"/>
      {/* </div> */}
     
    </div>
    {/* </div> */}
    </Layout>
  )
}

export default Home
