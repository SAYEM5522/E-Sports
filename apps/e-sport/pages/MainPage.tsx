import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Home/Banner'
import Catalog from '../components/Home/Catalog'
import Layout from '../components/Layout'
import Event from '../components/Tournament/Event'
import { selectUser, setUser } from '../feature/userSlice'
import Cookies from 'js-cookie';
// axios.defaults.withCredentials=true
const MainPage = () => {
  const dispatch=useDispatch()
const getId=async()=>{
  try {
    const token=Cookies.get('token')
    const res = await axios.get('http://localhost:8081/user',{
      headers: { 'Authorization': `Bearer ${token}` },
    });
    Cookies.set("email",res.data.user.Email)
    dispatch(setUser({
      user:res.data.user.Email
    }))
    
    
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  getId()
},[getId])
  return (
    <Layout>
      {/* 35.55rem  */}
         <div className={` flex-col w-full grid h-screen place-items-center   overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
          <Catalog/>

       {/* <div> */}
       <Banner/>
       <Event show={true} filter={false} type="Recommended Events"/>


     
     </div>
    </Layout>
  )
}

export default MainPage