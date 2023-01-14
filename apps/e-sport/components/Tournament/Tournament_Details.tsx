import classNames from 'classnames'
import Cookies from 'js-cookie'
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
  const id=router.query.id
  Cookies.set("_t_id",id as any,{expires:1})
  const {width,height}=useWindowSize()
  return (
    <div>
      {
        data.map((item:EProps,index:number)=>{
         
         if(Number(id)===item.Id){
          return(
            <div key={index}>
             <div className={` relative w-full  `} style={{height:height/1.9,width:width-257,}} >
              <div className='bg-gradient-to-t from-black to-[#222225] w-full   h-[23rem] absolute'></div>
              <Image
              src={item.Banner}
              alt={item.GName.charAt(0)}
              fill
              className='object-cover mix-blend-overlay'
              />
             {/* <div className='h-[6rem] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-#222225 to-[#222225] '/> */}
        
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