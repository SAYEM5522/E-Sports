

import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
const ServerBanMap = ({filteredResult}:any) => {

  
  const [phase, setPhase] = useState('ban');
  const [maps, setMaps] = useState<any>(['PEARL', 'SPLIT', 'BIND','ASCENT','HEAVEN']);
  const [bannedMaps, setBannedMaps] = useState<any>([]);
  const [selectedMap, setSelectedMap] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentEmail, setCurrentEmail] = useState<any>(null);

  useEffect(() => {
    if(currentEmail===null){
      setCurrentEmail(Cookies.get("email"))
    }
    if (maps.length === 1) {
      setSelectedMap(maps[0]);
      setPhase('end');
    }
    if (phase === 'ban' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && maps.length > 1) {
      setTimeLeft(10);
      if(currentEmail===filteredResult[0]?.participants.filter((i:any)=>i.pid===Cookies.get("email"))[0].pid) {
        setCurrentEmail(filteredResult[0]?.participants.filter((i:any)=>i.pid!==Cookies.get("email"))[0].pid);
      } else {
        setCurrentEmail(filteredResult[0]?.participants.filter((i:any)=>i.pid===Cookies.get("email"))[0].pid);
      }
      const randomMap = maps[Math.floor(Math.random() * maps.length)];
      handleBanMap(randomMap,currentEmail);
     
    }
    
  }, [timeLeft, phase, maps]);

  const handleBanMap = (map:any,c:any) => {
    if (phase === 'ban' && currentEmail.includes(c)) {
      // add map to banned maps and remove it from available maps
      setBannedMaps([...bannedMaps, map]);
      setMaps(maps.filter((m:any) => m !== map));
      setTimeLeft(10);
      if(currentEmail===filteredResult[0]?.participants.filter((i:any)=>i.pid===Cookies.get("email"))[0].pid) {
        setCurrentEmail(filteredResult[0]?.participants.filter((i:any)=>i.pid!==Cookies.get("email"))[0].pid);
      } else {
        setCurrentEmail(filteredResult[0]?.participants.filter((i:any)=>i.pid===Cookies.get("email"))[0].pid);
      }
    }
  }
  return (
    <div>
      { phase === 'ban' && (
        <div>
          <h2>Ban Phase</h2>
          <p>Team {currentEmail}'s turn</p>
          <p>Time left: {timeLeft} seconds</p>
          <div className='flex flex-wrap w-[500px]'>
    {maps.map((map:any) => (
      <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' key={map}>
       <p className='font-serif text-white font-bold text-lg'>{map}</p> 
        <button className='text-lg text-white font-bold' onClick={() => handleBanMap(map,Cookies.get("email"))}>Ban</button>
      </div>
    ))}
  </div>
        </div>
      )}
      { phase === 'end' && (
        <div>
          <h2>Selected Sercer</h2>
          <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' >
       <p className='font-serif cursor-pointer  text-white font-bold text-lg'>{selectedMap}</p> 
      </div>
        </div>
        
      )}
    </div>
  );
};



export default ServerBanMap;
