import axios from 'axios'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'
import LandingPage from './LandingPage'
import MainPage from './MainPage'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
const Home: NextPage = () => {
  const [user,setUser]=useState<string>()
    
    useEffect(()=>{
    setUser(Cookies.get("email"))
    },[])
  return (
    <div>
        {
          user?
          <MainPage/>:
          <LandingPage/>

        }
    </div>
  )
}

export default Home
