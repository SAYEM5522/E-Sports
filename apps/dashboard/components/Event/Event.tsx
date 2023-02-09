"use client";
import React, { useState } from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik'
import axios from 'axios';
import Link from 'next/link';

const validationSchema = Yup.object({
  Logo: Yup.string().required('Logo is required'),
  GName: Yup.string().required('Game Name is required'),
  Server: Yup.string().required("Server is required"),
  EntryFee:Yup.number().required("EntryFee is required"),
  Date: Yup.date().required('Date is required'),
  Mode: Yup.string().required("Mode is required"),
  Slot: Yup.number().required("Slot is required"),
  Banner: Yup.string().required('Banner is required'),
  Tournament_Info: Yup.string().required('Tournament Info is required'),




})
const Event = () => {
  const [message,setMessage]=useState<any>()
  const initialValues = {
    Logo: '',
    GName: '',
    Server: '',
    EntryFee:0,
    Date:null,
    Mode:null,
    Slot:0,
    Banner:'',
    Tournament_Info:""
  }
  const onSubmit = async(values:any, { setSubmitting, resetForm }:any) => {
    const data={
      Logo:values.Logo,
      GName:values.GName,
      Server:values.Server,
      EntryFee:values.EntryFee,
      Date:values.Date,
      Mode:values.Mode,
      Slot:values.Slot,
      Banner:values.Banner,
      Tournament_Info:values.Tournament_Info
    }
    await axios.post(`http://localhost:8081/Event`,data).then((res)=>{
       setMessage(res.data.message)
     }).catch((err)=>{
       console.log(err)
     })
     
    }
  return (
    <div className='relative '>
       {
      message&&<p className='text-black text-center font-bold  italic text-lg'>{message}</p>
     }
     <Link href={"/EventRule"}>
     <div className='absolute right-10 top-5 flex items-center justify-center cursor-pointer bg-[#F3A195] h-10 w-44 rounded-md   '>
     <p className="text-white font-serif font-bold text-lg" >Make Event Rule </p>
     </div>
     </Link>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {({values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <div className='flex items-center flex-wrap w-full h-full'>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Logo
              </label>
              <Field className="outline-none h-9 p-2 bg-transparent border border-black rounded-sm placeholder-shown:p-2 text-black" name="Logo" type="text" placeholder="Enter Logo.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Logo" component="div" />
              </div>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
            
              <label className='text-black font-medium font-serif pl-1'>
              Game Name
              </label>
              <Field className="outline-none h-9 p-2 bg-transparent border border-black  rounded-sm placeholder-shown:p-2 text-black" name="GName" type="text" placeholder="Enter Game Name.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="GName" component="div" />
              </div>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Server
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Server" type="text" placeholder="Enter Server Reigon.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Server" component="div" />
              </div>
              <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              EntryFee
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="EntryFee" type="number" placeholder="Enter EntryFee.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="EntryFee" component="div" />
              </div> <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Start Time
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Date" type="datetime-local" placeholder="Enter Start Time.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Date" component="div" />
              </div> <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Mode
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Mode" type="text" placeholder="Enter Mode.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Mode" component="div" />
              </div> <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Slot
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Slot" type="number" placeholder="Enter Slot.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Slot" component="div" />
              </div>
               <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Banner
              </label>
              <Field className="outline-none bg-transparent border border-black  h-9 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Banner" type="text" placeholder="Enter Banner Image.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Banner" component="div" />
              </div> <div className='flex mr-10 ml-10 w-[370px] flex-col mt-3'>
              <label className='text-black font-medium font-serif pl-1'>
              Tournament Info
              </label>
              <Field className="outline-none bg-transparent border border-black  h-20 p-2 rounded-sm placeholder-shown:p-2 text-black" name="Tournament_Info" type="text" placeholder="Tournament Info Reigon.." />
              <ErrorMessage className='font-serif text-[#FF0000] font-medium pl-1 pt-1' name="Tournament_Info" component="div" />
              </div>
              
            </div>
            <div className='h-full grid place-items-center mt-5'>
              <button 
                type="submit"
                className='h-9  w-[370px] mt-1 mb-3 font-serif font-[600]  bg-[#B6FF40] rounded-sm ' 
                // disabled={isSubmitting}
              >
                Create Event
              </button>
            </div>
          </form>
        )}
        </Formik>
    </div>
  )
}

export default Event