import React from 'react'
import Footer from '../components/Footer/Footer'
import { useWindowSize } from '../components/Hooks/useWindowSize'
import Layout from '../components/Layout'
import RecentMatch from '../components/Team/RecentMatch'

const Profile = () => {
 const {width,height}= useWindowSize()

  return (
    <Layout>
         <div className=' w-full h-full relative' >
         <div 
      style={{
        width: (width-256),
        height: height-250,
        position: "relative",
        background: `linear-gradient(to bottom, rgba(34,34,37,0.4),#222225), url('https://epulze.com/public/assets/images/mlbb_header_02.png')`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
         >
          
          </div>
          <div className='flex  items-start flex-row h-full w-full' >
      <div className='h-96 w-[65%] ml-3 bg-[#222225] '>
        <RecentMatch/>
      </div>
      <div className='bg-[#15141B] h-52 w-[35%] ml-2 mr-2 rounded-md'>
      </div>
    </div>
      <Footer/>
      </div>
      
      
    </Layout>
  )
}

export default Profile