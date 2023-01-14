import axios from 'axios'
import Cookies from 'js-cookie'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import { data } from '../../TournamentInfo'
// export async function getServerSideProps(context:GetServerSideProps) {
//   const id='63c23bf792f876824520119a'
//   const res= await fetch(`http://localhost:8081/getEventRule/${id}`)
//   const data=res.json()
//   console.log(data)
//   return {
//     props: {
//       rule:data
//     }, // will be passed to the page component as props
//   }
// }
const Rules_Info = () => {
  const [rules,setRules]=useState([])
  const id='63c23bf792f876824520119a'
 const getRules=async()=>{
 const data= await axios.get(`http://localhost:8081/getEventRule/${id}`).then((res)=>{
        setRules(res.data[0].Rules)
    }).catch((err)=>{
     console.log(err)
    })
 }
  useEffect(()=>{
    getRules()
  },[id])
  return (
    <div className='w-2/3'>
      {
        rules.map((item:any,index)=>{
           return(
            <div className='mt-6 pl-5' key={index}>
             <p className='text-white font-serif font-bold text-2xl'>{item.caption}</p>
             <p className='text-white font-serif font-medium text-lg'>{item.details}</p>
            </div>
           )
        })
      }
    </div>
  )
}

export default Rules_Info