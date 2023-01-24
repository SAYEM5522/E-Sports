// import React, { useState, useEffect } from "react";

// const MapBanPick = () => {
//   const [maps, setMaps] = useState<any>(["Map 1", "Map 2", "Map 3", "Map 4"]);
//   const [bannedMaps, setBannedMaps] = useState<any>([]);
//   const [selectedMap, setSelectedMap] = useState(null);
//   const [banPickPhase, setBanPickPhase] = useState(1);
//   const [team, setTeam] = useState("Team A");
//   const [isDisabled, setIsDisabled] = useState(false);

//   // useEffect to handle the 30 second delay between each turn
//   useEffect(() => {
//     let timeout:any;
//     if (isDisabled) {
//       timeout = setTimeout(() => {
//         setIsDisabled(false);
//       }, 30000);
//     }
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [isDisabled]);

//   useEffect(() => {
//     if (maps.length === 1) {
//       setSelectedMap(maps[0]);
//     }
//   }, [maps]);

//   const handleBan = (map:any) => {
//     if (!isDisabled && banPickPhase === 1) {
//       setBannedMaps([...bannedMaps, map]);
//       setMaps(maps.filter((m:any) => m !== map));
//       setIsDisabled(true);
//       setTeam((team) => (team === "Team A" ? "Team B" : "Team A"));
//     }
//   };

//   const handlePick = (map:any) => {
//     if (!isDisabled && banPickPhase === 2) {
//       setSelectedMap(map);
//       setIsDisabled(true);
//       setTeam((team) => (team === "Team A" ? "Team B" : "Team A"));
//       setBanPickPhase(3);
//     }
//   };

//   const renderMaps = () => {
//     return maps.map((map:any, index:any) => (
//       <button key={index} onClick={() => handleBan(map)} disabled={isDisabled}>
//         {map}
//       </button>
//     ));
//   };

//   const renderBanPickScreen = () => {
//     if (selectedMap) {
//       return <div>Selected Map: {selectedMap}</div>;
//     } else {
//       return (
//         <div>
//           <div>Banned Maps: {bannedMaps.join(", ")}</div>
//           <div>{renderMaps()}</div>
//           <div>Turn: {team}</div>
//         </div>
//       );
//     }
//   };

//   return <div>{renderBanPickScreen()}</div>;
// };

// export default MapBanPick;

import React, { useState, useEffect } from 'react';
import MapList from './MapList';
const MapBanPick = () => {
  
  const [phase, setPhase] = useState('ban');
  const [maps, setMaps] = useState<any>(['PEARL', 'SPLIT', 'BIND','ASCENT','HEAVEN']);
  const [bannedMaps, setBannedMaps] = useState<any>([]);
  const [selectedMap, setSelectedMap] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentEmail, setCurrentEmail] = useState("sayem@gmail.com");

  useEffect(() => {
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
      if(currentEmail === 'sayem@gmail.com') {
        setCurrentEmail("zarif@gmail.com");
      } else {
        setCurrentEmail("sayem@gmail.com");
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
      if(currentEmail === 'sayem@gmail.com') {
        setCurrentEmail("zarif@gmail.com");
      } else {
        setCurrentEmail("sayem@gmail.com");
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
          <MapList maps={maps} onBanMap={handleBanMap} />
        </div>
      )}
      { phase === 'end' && (
        <div>
          <h2>Selected Map</h2>
          <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' >
       <p className='font-serif cursor-pointer  text-white font-bold text-lg'>{selectedMap}</p> 
      </div>
        </div>
      )}
    </div>
  );
};



export default MapBanPick;


























