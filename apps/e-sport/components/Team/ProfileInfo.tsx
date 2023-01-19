import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
const validationSchema = Yup.object({
  City: Yup.string().required('City is required'),
  Zipcode: Yup.string().required('Zipcode is required').min(2, 'Zipcode must be at least 5 characters'),
  Phone: Yup.string().required('Phone is required').min(10, 'Phone must be at least 10 digits'),
  dob: Yup.date().required('Date of Birth is required')
})
const ProfileInfo = () => {
  const initialValues = {
    City: '',
    Zipcode: '',
    Phone: '',
    dob: new Date()
  }
 

  const onSubmit = (values:any, { setSubmitting, resetForm }:any) => {
    const day = Number(values.dob.split("-")[2])
   const month = Number(values.dob.split("-")[1])
   const year =Number(values.dob.split("-")[0])
   const updateData={
    city:values.City,
    zipcode:values.Zipcode,
    phone:values.Phone,
    dob:{
      year,
      month,
      day
    }
    
   }
   console.log(updateData)
   
  }
  
  
  return (
<div className='w-full  h-full'>
<p className='text-white mb-3 ml-5 italic text-lg'>Update Your Profile Informations</p>

<Formik 
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
{({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
  <form onSubmit={handleSubmit}>
    <div className='flex flex-wrap ml-20'>
      <div className='flex mr-10 ml-10 w-[350px] flex-col mt-3'>
      <label className='text-white font-medium font-serif pl-1'>
      City
      </label>
      <Field className="outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black" name="City" type="text" placeholder="Enter City.." />
      <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="City" component="div" />
      </div>
      <div className='flex mr-10 ml-10 w-[350px] flex-col mt-3'>
    
      <label className='text-white font-medium font-serif pl-1'>
      Zip
      </label>
      <Field className="outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black" name="Zipcode" type="text" placeholder="Enter Zipcode.." />
      <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Zipcode" component="div" />
      </div>
      <div className='flex mr-10 ml-10 w-[350px] flex-col mt-3'>
      <label className='text-white font-medium font-serif pl-1'>
      Phone
      </label>
      <Field className="outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black" name="Phone" type="tel" placeholder="Enter Phone.." />
      <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Phone" component="div" />
      </div>
      <div className='flex mr-10 ml-10 w-[350px] flex-col mt-3'>
      <label className='text-white font-medium font-serif pl-1'>
      Date Of Birth
      </label>
      <Field className="outline-none h-8 p-2 rounded-md placeholder-shown:p-2 text-black" name="dob" type="date" placeholder="Enter Date of Birth" />
      <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="dob" component="div" />
      </div>
    </div>
    <div className='h-full grid place-items-center mt-5'>
      <button 
        type="submit"
        className='h-9  w-[350px] mt-2 font-serif font-[600] w-full bg-[#B6FF40] rounded-md ' 
        // disabled={isSubmitting}
      >
        Update
      </button>
    </div>
  </form>
)}
</Formik>
</div>

  )
}

export default ProfileInfo