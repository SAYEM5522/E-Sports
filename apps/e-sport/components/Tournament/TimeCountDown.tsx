import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'

const TimeCountDown = ({startTime,callback}:any) => {
  const start='2023-01-18T18:20:00'
  const [remainingTime, setRemainingTime] = useState<any>();
const remainingDuration = moment.duration(remainingTime);
const remainingDays = remainingDuration.days();
const remainingHours = remainingDuration.hours();
const remainingMinutes = remainingDuration.minutes();
const remainingSeconds = remainingDuration.seconds();
  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = moment.duration(moment(start).diff(moment()));
      setRemainingTime(timeRemaining)
      if (timeRemaining.asSeconds() <= 0) {
        callback({ message:true });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
}, []);
  return (
    <div className='flex'>
      {
        (remainingDays>0)? <p className='text-white font-serif font-bold text-xl pl-3'> 
        {remainingDays} days</p>:null
      }
      <p className='text-white font-serif font-bold text-xl pl-3'> 
        {remainingHours} hours {remainingMinutes} mins {remainingSeconds} sec</p>
        <div>

        </div>
        {/* Remaining Time: {moment(start).diff(moment(), 'minutes')}:{moment(start).diff(moment(), 'seconds') % 60} */}
        
    </div>
  )
}

export default TimeCountDown