import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const SignupSchema=yup.object({
  Username:yup.string().required("Username is a required field"),
  Email:yup.string().required("Email is a required field").email("Email is not valid!"),
  Passward:yup.string().min(6,"Passward must be at least 6 charecters"),
  ConfirmPassward:yup.string().oneOf([yup.ref("Passward")],"Passward must be match"),
  Country:yup.string().required("Country is a required field")

})
const buttonVariants = {
  idle: {
    scale: 1
  },
  press: {
    scale: 1.06
  }
};
const TeamMaking = () => {
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
  const {
    register,
    handleSubmit,
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const formData=async(data:any)=>{
    const signupItem={
      Username:data.Username,
      Email:data.Email,
      Passward:data.Passward,
      ConfirmPassward:data.ConfirmPassward,
      Country:data.Country
    }
    console.log(signupItem)
    
  
  } 


  return (
    <div className='ml-auto mr-auto '>
      <p className='font-serif text-white mt-5 italic text-center font-medium cursor-pointer text-2xl'>Create Your Team</p>
   
    <div className='w-80 h-80 flex-col  bg-[#15141B] mt-9 rounded-md '>
      <form onSubmit={handleSubmit(formData)}>

      
      <input   type={"text"} placeholder="Enter Team Name " className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md '/>
      <div className='mt-10 ml-4 '>
      <input type={"file"} id="actual-btn" hidden />
      <label htmlFor="actual-btn" className='  bg-red-200  rounded-md p-2 px-10 cursor-pointer'>Choose Profile</label>
      </div>
      <div className='mt-10 ml-4 '>
      <input type={"file"} id="actual-btn" hidden />
      <label htmlFor="actual-btn" className='  bg-red-200  rounded-md p-2 px-5 cursor-pointer'>Choose Cover Photo</label>
      </div>
      <motion.button  
      variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-3 mr-3 mt-8  rounded-md items-center justify-center  h-9 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>

     
   </form>
    </div>
    </div>
  )
}

export default TeamMaking