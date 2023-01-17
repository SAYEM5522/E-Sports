import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'
import CreateTeam from './CreateTeam';
import RecentMatch from './RecentMatch';

const Team_Info = () => {
  const fileInput = useRef<any>();
  const [file, setFile] = useState<File>();
  const handleFileChange = (e:any) => {
    if (e.target.files) {
    
      setFile(e.target.files[0]);
      console.log(file)
    }
  };
  const handleUpload = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileInput.current.files[0]);
    const data={
      Teamname:"hello",
      Email:"md1040@gmail.com",
      Profile:formData
    }

    try {
      const res = await axios.post("http://localhost:8081/Team", data, {
        headers: {
          // "Content-Type": "multipart/form-data"
        }
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='flex items-start flex-row '>
      <div className='h-96 w-[65%] ml-3 bg-[#222225] '>
        <RecentMatch/>
      </div>
      <div className='bg-black h-52 w-[35%] ml-2 mr-2 rounded-md'>
       <CreateTeam/>
      </div>
    </div>
  )
}

export default Team_Info