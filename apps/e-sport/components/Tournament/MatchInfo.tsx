import React from 'react'
import { useSelector } from 'react-redux'
import { selectReamingTimeIndicator } from '../../feature/userSlice'

const MatchInfo = () => {
  const timeInfo=useSelector(selectReamingTimeIndicator)

  return (
    <div>
      {
        timeInfo?
        <p>finish</p>:
        <div className='w-[60%] h-10 bg-[#F26D59] grid place-items-center rounded-md mx-auto mt-5 cursor-pointer'>
        <p className='text-lg font-serif font-medium text-white'>Tournament Starting Time Is Reaming.Please Wait for Reaming The Time </p>
        </div>
      }
     
    </div>
  )
}

export default MatchInfo