import React, { useEffect, useState } from 'react'
import Event from './Event'
import {BsFillTrophyFill} from "react-icons/bs"
import {BsFilterLeft} from "react-icons/bs"
import { GameList } from '../Sidebar/Sidebar'
const Mode=[
  {
    id:1,
    mode:"1v1"
  },
  {
    id:2,
    mode:"2v2"
  },{
    id:3,
    mode:"3v3"
  },
  {
    id:4,
    mode:"4v4"
  },{
    id:5,
    mode:"5v5"
  },
]
const TournamentList = ({eventList}:any) => {
  const [selectedFilters, setSelectedFilters] = useState<any>({
    category: [],
    mode: [],
    // timing: []
  });
  const [filteredItems, setFilteredItems] = useState<any>([]);

  useEffect(() => {
    setFilteredItems(
      eventList.filter((item:any) => {
        let isValid = true;
        if (selectedFilters.category.length) {
          isValid = isValid && selectedFilters.category.includes(item.GName);
        }
        if (selectedFilters.mode.length) {
          isValid = isValid && selectedFilters.mode.includes(item.Mode);
        }
        // if (selectedFilters.timing.length) {
        //   isValid = isValid && selectedFilters.timing.includes(item.timing);
        // }
        return isValid;
      })
    );
  }, [eventList, selectedFilters]);

  const handleCheckboxChange = (event:any) => {
    const { name, value } = event.target;
    

    if (selectedFilters[name].includes(value)) {
      setSelectedFilters({
        ...selectedFilters,
        [name]: selectedFilters[name].filter((item:any) => item !== value)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [name]: [...selectedFilters[name], value]
      });
    }
  };

  return (
    <div className={`flex flex-col ml-5 h-[35.55rem] w-full  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden`}>
     <div className='flex items-center pl-1 pt-6'>
      <BsFillTrophyFill color='white' size={40}/>
      <p className='text-white font-serif font-medium text-3xl ml-4 cursor-pointer'>Tournaments</p>
     </div>
    <div className='mt-4 flex items-start  w-full'>
      <div className='w-52 h-full mt-2 bg-[#101820FF] relative rounded-md cursor-pointer '>
      <BsFilterLeft color='white' size={30} className="cursor-pointer absolute"/>
        <div  className='mb-1 ml-2'>
          <p className='text-white font-serif font-bold text-xl p-3' >Games</p>
          {
            GameList.map((item,index)=>{
              return(
                <div key={index} className="flex items-center pb-1">
                  <input value={item.name}  onChange={handleCheckboxChange} type={"checkbox"} name="category" className=" w-6 h-6 rounded-lg cursor-pointer outline-none "/>
                  <p className='text-white font-serif font-medium ml-2 text-lg'>{item.name}</p>
                </div>
              )
            })
          }
        </div>
        <div className='w-full h-[1px] bg-white'/>
        <div className='mb-1 ml-2'>
          <p className='text-white font-serif font-bold text-xl p-3' >Mode</p>
          {
            Mode.map((item,index)=>{
              return(
                <div key={index} className="flex items-center pb-1">
                  <input value={item.mode} onChange={handleCheckboxChange}  name="mode" type={"checkbox"} className=" w-6 h-6 rounded-lg cursor-pointer"/>
                  <p className='text-white font-serif font-medium ml-2 text-lg'>{item.mode}</p>
                </div>
              )
            })
          }
        </div>
        <div className='w-full h-[1px] bg-white'/>

      </div>
      <div className='w-full ml-3'>
      <Event show={false} filter={true} eventList={filteredItems} />

      </div>
    </div>
    </div>
  )
}

export default TournamentList