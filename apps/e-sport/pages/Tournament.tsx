import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import TournamentList from '../components/Tournament/TournamentList'
const Tournament = () => {
  const [eventList,setEventList]=useState([])
  const getEvent=async()=>{
  await axios.get("http://localhost:8081/getEvent").then((res)=>{
      setEventList(res.data)
   }).catch((err)=>{
    console.log(err)

   })
  }
  useEffect(()=>{
    getEvent()
  },[])

  return (
    <Layout>
      <TournamentList eventList={eventList} />
    </Layout>
  )
}

export default Tournament