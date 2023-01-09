import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenSignup, setopenSignup } from '../../feature/userSlice'
import { data } from '../../TournamentInfo'
interface IEvent{
  show:boolean,
  type?:string,
  filter?:boolean
}
const Event = ({show,type,filter}:IEvent) => {
  const router=useRouter()
  const dispatch=useDispatch()
  const OsignUp=useSelector(selectOpenSignup)
  const user=false
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
            <div onClick={()=>GotoDetails(item.Id)}  key={index} className={`${filter?'w-[31.5%]':'w-[30%]'}  h-[22rem] bg-white ${filter?'mr-4':'mr-9'} mt-3 mb-4 cursor-pointer rounded-lg   `}>
              <div className='w-full h-[210px] relative'>
              <Image
              src={item.Banner}
              alt={item.GName.charAt(0)}
              className="rounded-t-lg hover:scale-[1.04]"
              fill
              />
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