import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'

const TimeCountDown = ({startTime,callback}:any) => {
  const start='2023-01-24T12:19:00.000Z'
  
  const [remainingTime, setRemainingTime] = useState<any>();

// console.log(moment.duration(moment(startTime).diff(moment())))
  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = moment.duration(moment(start).diff(moment()));
      setRemainingTime(timeRemaining)
      if (timeRemaining?.asSeconds() <= 0) {
        callback({ message:false });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
}, []);
const remainingDuration = moment.duration(remainingTime);
const remainingDays = remainingDuration.days();
const remainingHours = remainingDuration.hours();
const remainingMinutes = remainingDuration.minutes();
const remainingSeconds = remainingDuration.seconds();
  return (
    <div className='flex'>
      {
        (remainingDays>0)? <p className='text-white font-serif font-bold text-lg pl-3'> 
        {remainingDays} days</p>:null
      }
      <p className='text-white font-serif font-bold text-lg pl-3'> 
        {remainingHours} hours {remainingMinutes} mins {remainingSeconds} sec</p>
        <div>

        </div>
        
    </div>
  )
}

export default TimeCountDown