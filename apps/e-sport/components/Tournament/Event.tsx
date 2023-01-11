import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenSignup, setopenSignup } from '../../feature/userSlice'
import { data } from '../../TournamentInfo'
import {BsPeople} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"
import {CiCalendarDate} from "react-icons/ci"
interface IEvent{
  show:boolean,
  type?:string,
  filter?:boolean
}
const Event = ({show,type,filter}:IEvent) => {
  const router=useRouter()
  const dispatch=useDispatch()
  const OsignUp=useSelector(selectOpenSignup)
  const user=true
  const GotoDetails=useCallback((id:number)=>{
     if(
      user
     ){
      router.push(`/TournamentDetails?id=${id}`,)
     }else{
      dispatch(
        setopenSignup({
          openSignup:true
        })
      )
     }
    
  },[])
  
  return (
    <div className=''>
      {
        show?
        <p className='font-serif font-bold text-white text-2xl mb-1'>{type}</p>
        :null
      }
      
     <div className=' flex items-center flex-wrap '>

      {
        data.map((item,index)=>{
          return(
            // width length should change
            <div onClick={()=>GotoDetails(item.Id)}  key={index} className={`${filter?'w-[31.5%]':'w-[31%]'}  h-[22rem] bg-[#15141B] mr-4 mt-3 mb-4 relative hover:shadow-[5px_5px_10px_rgb(129,226,252)] cursor-pointer rounded-lg   `}>
              <div className='w-full h-[210px] relative'>
              <Image
              src={item.Banner}
              alt={item.GName.charAt(0)}
              className=" max-w-full hover:scale-[1.02] duration-500 transform-origin-center object-cover rounded-t-lg "
              fill
              />
              <div className='backdrop-blur-sm h-12 w-full bg-white/30 absolute bottom-0'>
                <p className='text-white font-bold font-serif p-3'>${item.Price_Pool}+
                <span className='text-[#ADF440] text-xl'>${item.Extra_Price}</span>
                </p>
              </div>

              </div>
              <div>
                  <div>
                     <p className='p-3 text-white font-bold text-xl font-serif'>{item.GName} {item.Mode}</p>
                  </div>
                  <div className=' pl-3 flex items-center justify-between '>
                    <p className='text-white font-serif font-medium font-lg ml-3 '>{item.EntryFee}</p>
                    <p className='text-white font-serif font-medium font-lg '>{item.Mode}</p>
                    <div className='mr-3 flex items-center'>
                    <p className='text-white font-serif font-medium font-lg mr-2 '>{item.Slot}</p>
                    <BsPeople color='white' size={18}/>
                    </div>
                    
                  </div>
                  <div className='w-[92%] ml-auto mr-auto h-[0.1px] bg-[whitesmoke] mt-2 '/>
                  <div className='flex items-center justify-between mx-6 mt-2'>
                    <div className='flex items-center'>
                      <CiCalendarDate className='text-white mr-2' size={20}/>
                    <p className='text-white font-serif font-medium text-lg'>{item.Date}</p>

                    </div>
                    <div className='flex items-center mr-2'>
                      <p className='text-white font-serif font-medium text-lg mr-1'>{item.Server}</p>
                      <IoLocationOutline className='text-white' size={18}/>

                    </div>
                  </div>
              </div>
          
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Event