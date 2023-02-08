

import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import ServerBanMap from './ServerBanMap';

const MapBanPick = () => {
  const [BracketList,setBracketList]=useState([])
  const [open,setOpen]=useState(false)
  const [maps, setMaps] = useState<any>([]);


 
  const getBracket=async()=>{
    const d=Cookies.get("_t_id")
    axios.get(`http://localhost:8081/getBracket/${d}`).then((res)=>{
    setBracketList(res.data)
   }).catch((err)=>{
    console.log(err)
   })
  }
  const getMapBan=async()=>{
    const d=Cookies.get("_m_p_id_")
    axios.get(`http://localhost:8081/getMapBan/${d}`).then((res)=>{
      setMaps(res.data[0].map)
      if(res.data.length>0){
        setOpen(true)
      }
   }).catch((err)=>{
    console.log(err)
   })
  }
  useEffect(()=>{
   getBracket(),
   ()=>getBracket(),
   getMapBan()
   if(open===false){
    mapPost()
   }
  },[open])
  const filteredResult:any = BracketList?.filter((match:any)=> 
  match.participants.some((participant:any) => participant.pid === Cookies.get("email"))
  );
  const maplist=()=>{
    const participants = filteredResult[0]?.participants?.map((item:any) => ({ email: item.pid }));
    const data={
     EventId:Cookies.get("_t_id"),
     participant:participants,
     map:[
     {
       name:"PEARL",
       status:false
   },
     {
       name:"PEARL",
       status:false
   },  {
       name:"SPLIT",
       status:false
   },
     {
       name:"BIND",
       status:false
   },  {
       name:"ASCENT",
       status:false
   },  {
       name:"HEAVEN",
       status:false
   }
 ]}
 return data
   }
   
   const mapPost=()=>{
     axios.post("http://localhost:8081/createMapBan",maplist()).then((res)=>{
      // Expire Date should Change
     Cookies.set("_m_p_id_",res.data._id,{expires:7})
     }).catch((err)=>{
       console.log(err)
     })
   }
    
  console.log(maps)
  const [phase, setPhase] = useState('ban');
  const [bannedMaps, setBannedMaps] = useState<any>([]);
  const [selectedMap, setSelectedMap] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentEmail, setCurrentEmail] = useState<any>(null);

  useEffect(() => {
    const falseCount = maps.filter((item:any) => item.status === false).length;
    if (falseCount === 1) {
      const selected = maps.find((item:any) => item.status === false);
      setSelectedMap(selected.name);
      setPhase('end');
    } else {
      setSelectedMap("");
    }
    if(currentEmail===null){
      setCurrentEmail(Cookies.get("email"))
    }
    // if (maps.length === 1) {
    //   setSelectedMap(maps[0].name);
    //   setPhase('end');
    // }
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
      handleBanMap(randomMap.name,currentEmail);
     
    }
    
  }, [timeLeft, phase, maps]);
  console.log(selectedMap)
  const handleBanMap = (map:any,c:any) => {
    if (phase === 'ban' && currentEmail.includes(c)) {
      // add map to banned maps and remove it from available maps
      // setBannedMaps([...bannedMaps, map]);
      setMaps(maps.filter((m:any) => m.name !== map));
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
    {maps.map((map:any,index:number) => (
      <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' key={index}>
       <p className='font-serif text-white font-bold text-lg'>{map.name}</p> 
        <button className='text-lg text-white font-bold' onClick={() => handleBanMap(map?.name,Cookies.get("email"))}>Ban</button>
      </div>
    ))}
  </div>
        </div>
      )}
      { phase === 'end' && (
        <div>
        <div>
          <h2>Selected Map</h2>
          <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' >
       <p className='font-serif cursor-pointer  text-white font-bold text-lg'>{selectedMap}</p> 
      </div>
        </div>
        <ServerBanMap filteredResult={filteredResult}/>
        </div>
      )}
    </div>
  );
};



export default MapBanPick;


























