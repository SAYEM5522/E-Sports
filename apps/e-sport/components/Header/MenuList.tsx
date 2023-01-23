import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Logout from './Logout'
const Menu=[
  {
    id:1,
    name:"Overview",
    link:"/Team"
  },
  {
    id:2,
    name:"Security",
    link:"/Team/Security"
  },{
    id:3,
    name:"Profile Settings",
    link:"/Team/PSettings"
  },
  {
    id:4,
    name:"Prime",
    link:"/Team/Prime"
  },{
    id:5,
    name:"Withdraw",
    link:"/Wallet/Wallet"
  },{
    id:6,
    name:"Redem",
    link:"/Wallet/Redem"
  },
  {
    id:7,
    name:"Shop",
    link:"/Team/Shop"
  },
  {
    id:8,
    name:"Support & Faq",
    link:"/MainFaq"
  },
 
]
const MenuList = () => {
  const [open,setOpen]=useState(false)
  const router=useRouter()
  const logoutOpen=()=>{
    Cookies.remove('token');
    router.push('/LandingPage');
  }
  return (
    <div className='h-[430px] w-48 bg-[#15141B] absolute top-14  r-0 rounded-md z-20'>
      {
        Menu.map((item,index)=>{
          return(
            <div key={index}>
              <Link href={item.link}>
            <p  className='text-white font-serif text-md p-2 mt-2 hover:bg-red-400 text-center hover:rounded-sm '>{item.name}</p>

              </Link>
            </div>
          )
        })
      }
      
      <p onClick={logoutOpen} className='text-white font-serif text-md p-2 mb-2 hover:bg-red-400 text-center hover:rounded-sm '>Logout</p>
    </div>
  )
}

export default MenuList