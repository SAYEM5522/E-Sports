import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { data } from '../../TournamentInfo'
import { useWindowSize } from '../Hooks/useWindowSize'
interface EProps{
  
    Id: number,
    Logo: string,
    GName: string,
    Server: string,
    EntryFee: number,
    Date: string,
    Mode: string,
    Slot: string,
    Banner: string,

}
const Tournament_Details = () => {
  const router=useRouter()
  const {id}=router.query
  const {width,height}=useWindowSize()
  const BannerClass=classNames(`[h-${height/2}] w-[200px] bg-[red]`)
  return (
    <div>
      {
        data.map((item:EProps,index:number)=>{
         
         if(Number(id)===item.Id){
          return(
            <div key={index}>
             <div className={` relative`} style={{height:height/1.9,width:width-257,}} >
              <Image
              src={item.Banner}
              alt={item.GName.charAt(0)}
              fill
              // className='-z-10'
              />
             <div style={{backgroundImage:" linear-gradient( 180deg,transparent,rgba(37, 37, 37, 0.61),#111)",height:"7.8rem",display:"block",zIndex:1000,}}>

             </div>
             </div>
             
            </div>
          )
         }
        })
      }
    </div>
  )
}

export default Tournament_Details