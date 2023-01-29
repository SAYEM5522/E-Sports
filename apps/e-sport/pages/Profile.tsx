import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import { useWindowSize } from '../components/Hooks/useWindowSize'
import Layout from '../components/Layout'
import MemberteamInfo from '../components/Team/MemberteamInfo'
import RecentMatch from '../components/Team/RecentMatch'

const Profile = () => {
 const {width,height}= useWindowSize()
 const [data, setData] = useState('');
 const [user,setUser]=useState<any>(null);
 const getUser=async()=>{
    axios.get(`http://localhost:8081/getSpecificUser/${data}`).then((res)=>{
     setUser(res.data.user[0])
    }).catch((err)=>{
      console.log(err)
    })
 }
 useEffect(() => {

  const storedData = sessionStorage.getItem('__p_id__');
  if (storedData) {
    setData(storedData);
  }
  getUser()

}, [data]);

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
          <div className='absolute top-[50%] pl-8'>
          <div className='w-[100px] h-[100px] relative '>
          <Image 
          src={"https://epulze.com/public/assets/images/mlbb_header_02.png"}
          alt=""
         fill
          className="rounded-[50px] object-cover cursor-pointer"
          />
          </div>
          <div className='flex items-center'>
          <p className='text-white font-serif text-lg font-bold pl-3 mr-3' >{user?.Username}</p>
          </div>
          </div>
          </div>
          <div className='flex  items-start flex-row h-full w-full' >
      <div className='h-96 w-[65%] ml-3 bg-[#222225] '>
        <RecentMatch/>
      </div>
      <div className='bg-[#15141B] h-52 w-[35%] ml-2 mr-2 rounded-md'>
        <MemberteamInfo  email={data} />
      </div>
    </div>
      <Footer/>
      </div>
      
      
    </Layout>
  )
}

export default Profile