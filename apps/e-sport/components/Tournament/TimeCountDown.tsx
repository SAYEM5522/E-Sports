import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setReamingTimeIndicator } from '../../feature/userSlice';

const TimeCountDown = ({startTime,callback}:any) => {
    
  const [remainingTime, setRemainingTime] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = moment.duration(moment(startTime).diff(moment()));
      setRemainingTime(timeRemaining)
      if (timeRemaining?.asSeconds() <= 0) {
       
        callback({ message:true });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
}, [startTime]);
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