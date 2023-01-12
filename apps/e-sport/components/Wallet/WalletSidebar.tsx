import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
const TeamItem=[
  {
    id:1,
    name:"Withdraw",
    link:"/Wallet/Wallet"

  },
  {
    id:2,
    name:"History",
    link:"/Wallet/History"

  },
  {
    id:3,
    name:"Redem",
    link:"/Wallet/Redem"

  },
  {
    id:4,
    name:"Payment Info",
    link:"/Wallet/Payment_Info"

  },
  {
    id:5,
    name:"Shop",
    link:"/Wallet/Shop"

  },
  
]
const WalletSidebar = () => {
  const router=useRouter()
  const goto=useCallback((link:any)=>{
    router.push(`${link}`)
  },[])
  const activeItem=useMemo(()=>
  TeamItem.find((menu)=>
      menu.link===router.pathname
    )
  ,[router.pathname])
  const getTournamentSidebarClasses=(menu:any)=>{
    return classNames("text-white mr-4 cursor-pointer uppercase  ",{
      ['border-b-2 border-green-500']:activeItem?.id===menu.id
    })
  }
  return (
    <div className='flex '>
    {
      TeamItem.map((item,index)=>{
        const classes=getTournamentSidebarClasses(item)

       return(
        <Link href={item.link} key={index}>
          <div  >
            <p onClick={()=>goto(item.link)} className={classes}>{item.name}</p>
          </div>
          </Link>
       )
      })
    }
  </div>
  )
}

export default WalletSidebar