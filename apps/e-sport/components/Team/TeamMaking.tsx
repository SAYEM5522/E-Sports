import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field,ErrorMessage } from 'formik';
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
  const fileInput = useRef<any>();
  const [file, setFile] = useState<File>();
  const initialValues = {
    Name: '',
    Zipcode: '',
    Phone: '',
    
  }
  const handleFileChange = (e:any) => {
    if (e.target.files) {
    
      setFile(e.target.files[0]);
      console.log(file)
    }
  };
  // const handleUpload = async (e:any) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", fileInput.current.files[0]);
  //   const data={
  //     Teamname:"hello",
  //     Email:"md1040@gmail.com",
  //     Profile:formData
  //   }

  //   try {
  //     const res = await axios.post("http://localhost:8081/Team", data, {
  //       headers: {
  //         // "Content-Type": "multipart/form-data"
  //       }
  //     });
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const onSubmit = (values:any, { setSubmitting, resetForm }:any) => {

   console.log(values)
   
  }
  return (

    <div className='ml-auto mr-auto '>
      <p className='font-serif text-white mt-5 italic text-center font-medium cursor-pointer text-2xl'>Create Your Team</p>
   
    <div className='w-80 h-80 flex-col  bg-[#15141B] mt-9 rounded-md '>
    <Formik 
 initialValues={{ name: '', profileImage: null, coverImage: null }}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
{({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
  <form onSubmit={handleSubmit}>

      
      <Field name="name"  type={"text"} placeholder="Enter Team Name " className='h-9 ml-3 mr-3 mt-5 pl-1 w-[90%] outline-none placeholder:pl-1 rounded-md '/>
      <ErrorMessage className='font-serif text-[#FF0000] font-medium ml-3 pt-1' name="name" component="div" />
          <div className='mt-3 ml-4 '>
          <Field className='bg-red-200 w-[90%]  rounded-md p-2 px-5 cursor-pointer' type="file" name="profileImage" accept="image/jpeg,image/png" />
          <ErrorMessage className='font-serif text-[#FF0000] font-medium ml-3 pt-1' name="profileImage" component="div" />
          </div>
          <div className='mt-3 ml-4  '>
          <Field className=' w-[90%] bg-red-200  rounded-md p-2 px-5 cursor-pointer' type="file" name="coverImage" accept="image/jpeg,image/png" />
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
</Formik>
    </div>
    </div>
  )
}

export default TeamMaking