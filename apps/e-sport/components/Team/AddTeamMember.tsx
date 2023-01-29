import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { setMemberListmodel, setMemberModelCheck } from '../../feature/userSlice';



const AddTeamMember = () => {
  const [user, setUser] = useState<any>([]);
  const [name, setName] = useState('');
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [warning,setWarning]=useState<any>([])
  const dispatch=useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/getSearchresult?name=${name}`);
        setUser(response.data.searchResults)
      } catch (err) {
        console.error(err);
      }
    };
    if (name) {
      fetchData();
    }
  }, [name]);
  function handleClick(item:any) {
    if (!selectedItems.includes(item.Email)) {
      setSelectedItems([...selectedItems, item.Email]);
    }
  }

  function handleCancelClick(item:any) {
    setSelectedItems(selectedItems.filter((i:any) => i !== item.Email));
  }
  const data = selectedItems.map((currentValue:any, currentIndex:any) => {
    return { "temail": currentValue }

  });
  const AddMemberToTeam=async()=>{
   const id=Cookies.get("__tid__")
      axios.post(`http://localhost:8081/Addmember/${id}`,data).then((res)=>{
      // console.log(res.data)
      dispatch(
        setMemberListmodel({MemberListmodel:false}))
        dispatch(
          setMemberModelCheck({MemberModelCheck:true}))
      
      }).catch((err)=>{
        setWarning(err.response.data)
        
      })
  }
  console.log(warning)

  return (
    <div>
      <p className='font-serif font-bold text-lg text-center border-b border-[rgba(0,0,0,0.4)] text-white py-1'>Add Your Team Member </p>
      {
        warning.length>0&&
         <p className='text-[red] font-serif text-sm flex items-center pr-1'>Duplicate Member : 
          {warning.map((item:any,index:number)=>{
            return(
              <div key={index} className="">
              <p className='text-[red] font-serif text-sm'>
                {item.temail} , 
              </p>
              </div>
            )
          })}
         </p>
         
        }
      
     
      <div className='grid place-items-center h-full mt-5'>
        <input  value={name} onChange={(e) => setName(e.target.value)}  type={"text"} placeholder="Enter username or email" className="outline-none w-[90%]  h-8 p-2 rounded-sm placeholder-shown:p-2 text-black" />

      </div>
      {user ? (
        <div className=' w-full ml-4 h-[290px]  overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden mt-3 text-black text-lg cursor-pointer '>
          {
            user?.map((item:any,index:any)=>{
              return(
                <div key={index} className="flex items-center justify-between mx-2 mt-3 px-3 py-2  rounded-md hover:scale-[1.02] hover:ease-in-out hover:duration-300 bg-black w-[90%]">
                  <div className='h-12 -mt-2'>
                  <p className='text-white' >{item.Username}</p>
                  <p className='text-gray-300 font-serif text-sm'>{item.Email}</p>
                  </div>
              {selectedItems.includes(item.Email) ? <ImCross  className='' color='white' onClick={() => handleCancelClick(item)}/>:
               <p onClick={() => handleClick(item)} className='px-2  rounded-sm bg-white'>Add</p>
              }
                </div>
              )
            })
          }
         
        </div>
      ) : (
        <p className='mt-5 ml-5 text-white text-lg text-center'>No user found</p>
      )}

<div>
        <p className='text-white font-serif font-medium pl-5 pt-3 cursor-pointer'>Selected Members:</p>
        <ul className='w-fit ml-4 h-5 flex items-center flex-wrap '>
          {selectedItems.map((item:any, index:any) => (
            <li className='text-white font-serif ml-1 mt-2 rounded-lg font-medium p-2 bg-black cursor-pointer'  key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='grid bg-[#CEFF7F] absolute bottom-2 left-[25%] right-[25%] ml-auto mr-auto w-44 rounded-md place-items-center  h-8'>
        <button onClick={AddMemberToTeam}  className='text-lg font-bold'>Add</button>
      </div>
    </div>
  )
}

export default AddTeamMember