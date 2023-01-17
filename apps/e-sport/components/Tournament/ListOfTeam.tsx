import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedTeam } from '../../feature/userSlice'
import {ImCross} from "react-icons/im"
import {RiCheckboxBlankCircleLine} from "react-icons/ri"
const ListOfTeam = ({mode}:any) => {
  const teamid=useSelector(selectSelectedTeam)
  const [allmember,setAllmember]=useState<any>([])
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [warning,setWarning]=useState<string>("")
  const getAllMember=async()=>{
    await axios.get(`http://localhost:8081/getMemberList/${teamid}`).then((res)=>{
      setAllmember(res.data)
   }).catch((err)=>{
    console.log(err)
   })
   
  }
  useEffect(()=>{
   getAllMember()
  },[])
  function handleClick(item:any) {
    
    if (!selectedItems.includes(item)&&selectedItems.length<2) {
      setSelectedItems([...selectedItems, item]);
    }
    else{
       setWarning("You have exceeds maximum number of members or dulicate members")
    }
  }

  function handleCancelClick(item:any) {
    setSelectedItems(selectedItems.filter((i:any) => i !== item));
  }
  const data = selectedItems.map((currentValue:any, currentIndex:any) => {
    return { "TName": currentValue.temail }
  });
  // const JoinTournament=async()=>{
  //  axios.post(`http://localhost:8081/Addmember/${teamid}`,data).then((res)=>{
  //    console.log(res.data)
  //  }).catch((err)=>{
  //    console.log(err)
  //  })
  // }

   const JoinTournament=async()=>{
   axios.post(`http://localhost:8081/AddManyvManyMember/${teamid}`,data).then((res)=>{
     console.log(res.data)
   }).catch((err)=>{
     console.log(err)
   })
  }
 
  
  
  return (
    <div className=' mt-8 ml-12 '>
      {
        warning?<p className='text-[red] text-center w-[70%] font-serif  ml-6 font-medium text-sm  -mt-7 cursor-pointer' >{warning}</p>:null
      }
      <p className='text-white font-serif mt-2 ml-5 font-bold pl-2 cursor-pointer'> You need to select {mode} member</p>
      {
        allmember[0]?.Teammember.map((item:any,index:any)=>{
          return(
           <div key={index}  className="h-full relative w-[80%] p-2 bg-black m-2 rounded-md  ">
            <p className='text-white font-serif font-medium pl-2 cursor-pointer'>
              {item.temail}
              {selectedItems.includes(item) ? <ImCross  className='absolute right-2 top-3' color='white' onClick={() => handleCancelClick(item)}/>:
              
              <RiCheckboxBlankCircleLine onClick={() => handleClick(item)}  className='absolute right-2 top-3' color='white'/>
              }
              </p>
           </div>
          )
        })
      }
     <div>
        <p className='text-white font-serif font-medium pl-2 cursor-pointer'>Selected Members:</p>
        <ul className='w-fit h-6 flex items-center flex-wrap '>
          {selectedItems.map((item:any, index:any) => (
            <li className='text-white font-serif ml-1 mt-2 rounded-lg font-medium p-2 bg-black cursor-pointer'  key={index}>{item.temail}</li>
          ))}
        </ul>
      </div>
      <div className='grid bg-[#CEFF7F] mt-20 ml-auto mr-auto w-44 rounded-md place-items-center  h-8'>
        <button onClick={JoinTournament} disabled={selectedItems.length<mode?true:false} className='text-lg font-bold'>Join Tournament</button>
      </div>
    </div>
  )
}

export default ListOfTeam