// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import MapBanPick from './MapBanPick'

// const StartMatch = () => {
//   const [readyUsers, setReadyUsers] = useState(0);
//   const [timeRemaining, setTimeRemaining] = useState(30);
//   const handleReady = () => {
//     setReadyUsers(readyUsers + 1);
//   }

//   useEffect(() => {
//     if(timeRemaining!==0){
//       const timer = setTimeout(() => {
//         setTimeRemaining(timeRemaining - 1);
//       }, 1000);
//     return () => clearTimeout(timer);
//     }
   
//   }, [timeRemaining]);
  
//   return (
//     <div className='w-full h-full flex justify-center '>
//     <div className='w-[85%]  flex justify-center '>
//       <div>
//        <div className='mt-10 mb-5'>
//         <p className='text-xl font-serif text-center font-bold text-white'>Volorant Map</p>
//        </div>
//        <p className='text-md font-serif font-medium mb-5 text-center text-white'>Tournament</p>
//        <div className='flex items-center'>

//        <div className='flex items-center'>
//        <p className='text-lg font-serif font-medium  text-white mr-1'>AFE</p> 

//         <div className='w-10 h-10 relative ml-2 '>
//         <Image
//         src={"https://epulze.com/public/assets/images/mlbb_header_02.png"}
//         alt=""
//         className='object-cover rounded-[20px]'
//         fill
//         />
//         </div>
//        </div>
//          <p className='text-lg font-serif font-medium  text-white ml-4 mr-4'>VS</p>
//        <div className='flex items-center' >

//         <div className='w-10 h-10 relative mr-2'>
//         <Image
//         src={"https://epulze.com/public/assets/images/mlbb_header_02.png"}
//         alt=""
//         className='object-cover rounded-[20px]'
//         fill

//         />
//         </div>
//        <p className='text-lg font-serif font-medium  text-white '>AFE</p>

//        </div>
        

//        </div>
//        <div>
//       <button onClick={handleReady}>Ready</button>
//       <p>Time remaining to join the event: {timeRemaining}</p>
//       {(readyUsers >= 2 || timeRemaining === 0) ? (
//         <button >Start Event</button>
//       ) : (
//         <p>Waiting for more users to be ready</p>
//       )}
//     </div>
   

//        </div>
//     </div>
//     </div>
//   )
// }

// export default StartMatch






import { useState, useEffect } from 'react';

const StartMatch = () => {
  const c=2

  const [players, setPlayers] = useState<any>([
    { id: 1, name: 'Player 1', ready: false },
    { id: 2, name: 'Player 2', ready: false },
  ]);
  const [Ready,setReady]=useState<boolean>(false)
  
  useEffect(() => {
    if (players.every((player:any) => player.ready === true)) {
      setReady(true)
    }
   
  }, [players]);
  const handleReadyClick = (id:any) => {
    if(c===id){
      setPlayers(
        players.map((player:any) =>
          player.id === id ? { ...player, ready: !player.ready } : player
        )
      );
    }
    
  };


  const startBanning = () => {
    if (players.every((player:any) => player.ready === true)) {
      console.log('All players are ready, starting map banning process');
      //TODO: start map banning process
    } else {
      console.log('Not all players are ready');
    }
  };

  return (
    <div>
      {players.map((player:any) => (
        <div key={player.id}>
          <p>{player.name}</p>
          <button onClick={() => handleReadyClick(player.id)}>
            {player.ready ? 'Not Ready' : 'Ready'}
          </button>
        </div>
      ))}
      {
        Ready&&<p>Ready</p>
      }
    </div>
  );
}
  
  export default StartMatch