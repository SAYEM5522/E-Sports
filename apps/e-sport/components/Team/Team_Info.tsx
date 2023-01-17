import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useCallback, useRef, useState } from 'react'

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
    <div className=''>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>
      <p>kklkl</p>

    </div>
  )
}

export default Team_Info