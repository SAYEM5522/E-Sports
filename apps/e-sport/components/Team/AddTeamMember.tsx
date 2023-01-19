import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddTeamMember = () => {
  const [user, setUser] = useState<any>([]);
  const [name, setName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/getSearchresult?name=${name}`);
        setUser(response.data)
      } catch (err) {
        console.error(err);
      }
    };
    if (name) {
      fetchData();
    }
  }, [name]);
  console.log(user)
  return (
    <div>
      <p className='font-serif font-bold text-lg text-center border-b border-[rgba(0,0,0,0.4)] text-white py-3'>Add Your Team Member </p>
      <div className='grid place-items-center h-full mt-5'>
        <input  value={name} onChange={(e) => setName(e.target.value)}  type={"text"} placeholder="Enter username or email" className="outline-none w-[90%]  h-8 p-2 rounded-sm placeholder-shown:p-2 text-black" />

      </div>
      {user ? (
        <div className='mt-5 ml-5 text-white text-lg cursor-pointer'>
          <p>{user.Username}</p>
         
        </div>
      ) : (
        <p className='mt-5 ml-5 text-white text-lg text-center'>No user found</p>
      )}
    </div>
  )
}

export default AddTeamMember