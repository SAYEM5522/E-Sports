import axios from 'axios'
import type { NextPage } from 'next'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Catalog from '../components/Home/Catalog'
import Banner from '../components/Home/Banner'
import Footer from '../components/Footer/Footer'
import { useRouter } from 'next/router'
const Home: NextPage = () => {

  const [token,setToken]=useState<string>()
  const router=useRouter()
  async function getId() {
    try {
      const token=Cookies.get('token')
      const res = await axios.get('http://localhost:8081/user', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      Cookies.set("email",res.data.user.Email)
      Cookies.set("__p_id__",res.data.user.Email,{expires:1})
    } catch (error) {
      console.log(error);
    }
  }
    useEffect(()=>{
  const currentToken = Cookies.get('token');
   // setToken(currentToken);
    getId();
  if (!currentToken) {
    router.push("/LandingPage")
   
  }
    },[])
  return (
    <div className='' >
        {/* {
          token? */}
          <Layout>
    
          <div className={` flex-col w-full grid h-screen place-items-center   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
            <Catalog/>
  
          <Banner/>
          {/* <Event show={true} filter={false} type="Recommended Events"/> */}
  
  
        <Footer/>
        </div>
          </Layout>
          {/* :
          <LandingPage/> */}

        {/* } */}
    </div>
  )
}

export default Home
