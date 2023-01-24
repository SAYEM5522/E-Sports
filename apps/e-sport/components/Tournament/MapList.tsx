import React from 'react';
const  c="sayem@gmail.com"
const MapList = ({ maps, onBanMap }:any) => (
  <div className='flex flex-wrap w-[500px]'>
    {maps.map((map:any) => (
      <div className='w-[170px] m-4 grid flex-row place-items-center h-14 bg-[#73B56A] rounded-sm' key={map}>
       <p className='font-serif text-white font-bold text-lg'>{map}</p> 
        <button className='text-lg text-white font-bold' onClick={() => onBanMap(map,c)}>Ban</button>
      </div>
    ))}
  </div>
);
export default MapList