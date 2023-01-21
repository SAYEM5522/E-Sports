import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import Cookies from 'js-cookie';
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  profileImage: Yup.mixed()
    .required('Profile image is required')
    // .test(
    //   'fileFormat',
    //   'Unsupported file format',
    //   value => value && (value.type === 'image/jpeg' || value.type === 'image/png'||value.type === 'image/jpg')
    // )
    ,
  coverImage: Yup.mixed()
    .required('Cover image is required')
    // .test(
    //   'fileFormat',
    //   'Unsupported file format',
    //   value => value && (value.type === 'image/jpeg' || value.type === 'image/png'||value.type === 'image/jpg')
    // ),
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

  const [profileImage, setProfileImage] = useState<any>(null);
  const [coverImage, setCoverImage] = useState<any>(null);
  const [Teamname, setTeamname] = useState('');
  const [success,setSuccess]=useState("")
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Teamname',Teamname);
    formData.append('Email', Cookies.get("email") as any);
    formData.append('profileImage', profileImage);
    formData.append('coverImage', coverImage);
    await axios.post('http://localhost:8081/Team', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setSuccess(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onSubmit = (values:any, { setSubmitting, resetForm }:any) => {

   
   const Teamname=values.name
   const  Email="md1040582@gmail.com"
  const  Profile= values.profileImage
  const Cover=values.coverImage
   const formData = new FormData();
   formData.append('Teamname', Teamname);
   formData.append('Email', Email);
   formData.append('profileImage', Profile);
   formData.append('coverImage', Cover);
   axios.post('http://localhost:8081/Team', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
   
  }
  return (

    <div className='w-full ml-auto mr-auto '>
      {
        success&&<p className='font-serif text-white mt-2 italic text-center font-medium cursor-pointer text-xl'>{success}</p>
      }
      <p className='font-serif text-white mt-5 italic text-center font-medium cursor-pointer text-2xl'>Create Your Team</p>
   
    <div className='w-80 h-80 flex-col ml-auto mr-auto  bg-[#15141B] mt-9 rounded-md '>

   <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input onChange={e => setTeamname(e.target.value)} required className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md ' placeholder='Enter Team Name'/>
        <input className='bg-red-200 w-[90%] ml-3 mt-5  rounded-md p-2 px-5 cursor-pointer' type="file" required name='profileImage' onChange={(e:any) => setProfileImage(e.target.files[0])} />
        <input className='bg-red-200 w-[90%] ml-3 mt-5 rounded-md p-2 px-5 cursor-pointer' type="file" name='coverImage' onChange={(e:any) => setCoverImage(e.target.files[0])} />
             
      <motion.button 
        type="submit"

      variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-3 mr-3 mt-4  rounded-md items-center justify-center  h-9 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>
    </form>
    </div>
    </div>
  )
}

export default TeamMaking









    {/* <Formik 
 initialValues={{ name: '', profileImage: null, coverImage: null }}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
{({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
  <form onSubmit={handleSubmit} encType="multipart/form-data">

      
      <Field name="name"  type={"text"} placeholder="Enter Team Name " className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md '/>
      <ErrorMessage className='font-serif text-[#FF0000] font-medium ml-3 pt-1' name="name" component="div" />
          <div className='mt-3 ml-4 '>
          <Field className='bg-red-200 w-[90%]  rounded-md p-2 px-5 cursor-pointer' type="file" name="profileImage" />
          <ErrorMessage className='font-serif text-[#FF0000] font-medium ml-3 pt-1' name="profileImage" component="div" />
          </div>
          <div className='mt-3 ml-4  '>
          <Field className=' w-[90%] bg-red-200  rounded-md p-2 px-5 cursor-pointer' type="file" name="coverImage" />
          <ErrorMessage className='font-serif text-[#FF0000] font-medium ml-3 pt-1' name="coverImage" component="div" />
          </div>
       
          
      <motion.button 
        type="submit"

      variants={buttonVariants}
      animate="idle"
      whileHover="hover"
      whileTap="press"
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className='w-[90%] ml-3 mr-3 mt-4  rounded-md items-center justify-center  h-9 bg-[#CEFF7F] font-serif  font-medium cursor-pointer text-lg'>Create</motion.button>

     
   </form>
)}
</Formik> */}